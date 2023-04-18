const { createParser } = require("eventsource-parser");

// Get the OpenAI API key from the environment variables or an empty string if not set
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";

// Define an async function that takes a payload and returns a ReadableStream
export async function OpenAIStream(payload) {
  // Create a TextEncoder and TextDecoder for converting between strings and byte arrays
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  // Initialize a counter for keeping track of the number of responses received
  let counter = 0;

  // Send the payload to the OpenAI API and get the response
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  // If the response status is not 200 OK, throw an error
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }

  // Create a ReadableStream with a start method that takes a controller
  const stream = new ReadableStream({
    async start(controller) {
      // Define a callback function for the eventsource-parser library to call when it parses an event
      function onParse(event) {
        // If the event type is "event", process the data
        if (event.type === "event") {
          const data = event.data;
          // If the data is "[DONE]", close the controller and return
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            // Parse the JSON data and get the text from the first choice
            const json = JSON.parse(data);
            const text = json.choices[0].delta?.content || "";
            // If the counter is less than 2 and the text contains a newline, return without enqueueing the text
            if (counter < 2 && (text.match(/\n/) || []).length) {
              return;
            }
            // Convert the text to a byte array and enqueue it
            const queue = encoder.encode(text);
            controller.enqueue(queue);
            // Increment the counter
            counter++;
          } catch (e) {
            // If there's an error, pass it to the controller's error method
            controller.error(e);
          }
        }
      }

      // Create a new eventsource-parser object with the callback function
      const parser = createParser(onParse);

      // Iterate over the chunks of the response body
      for await (const chunk of res.body) {
        // Decode the chunk to a string and feed it to the parser
        parser.feed(decoder.decode(chunk));
      }
    },
  });

  // Return the ReadableStream
  return stream;
}
