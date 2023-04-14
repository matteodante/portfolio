import { OpenAIStream } from "../../utils/openAIStream";
import { RateLimiterMemory } from "rate-limiter-flexible";
import getPrompt from "../../utils/prompt";

// Checking if the OPENAI_API_KEY environment variable is set and throwing an error if it isn't
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

// Exporting a configuration object with a runtime property set to "edge"
export const config = {
  runtime: "edge",
};

// Configuring a rate limiter with a limit of 10 requests per minute
const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 60,
});

const getIP = (request) => {
  const xff = request.headers.get("x-forwarded-for");
  return xff ? xff.split(",")[0] : "127.0.0.1";
};

// Exporting an asynchronous function that takes a request object as an argument
export default async function handler(req) {
  let prompt;

  // Checking if the request is within the rate limit
  try {
    await rateLimiter.consume(getIP(req));
  } catch (rateLimiterRes) {
    console.log(rateLimiterRes);
    // If the request is over the rate limit, returning a 429 Too Many Requests response
    return new Response(null, {
      status: 429,
      headers: {
        "Retry-After": Math.ceil(rateLimiterRes.msBeforeNext / 1000),
      },
    });
  }

  // Parsing the request body to extract the prompt property and storing it in the prompt variable
  try {
    const { prompt: reqPrompt } = await req.json();
    prompt = reqPrompt;
    console.log("Got prompt: ", prompt, "From: ", getIP(req));
  } catch (err) {
    // Returning a 400 Bad Request response if the request body is not valid JSON
    return new Response("Invalid JSON data in the request", { status: 400 });
  }

  // Returning a 400 Bad Request response if no prompt was provided in the request
  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  // Constructing a payload object with the necessary parameters for the OpenAI API
  const payload = {
    model: "gpt-3.5-turbo",
    messages: getPrompt(prompt.slice(-1)),
    temperature: 0.6,
    max_tokens: 300,
    stream: true,
    n: 1,
  };

  // Calling the OpenAIStream utility function with the payload object and storing the returned stream in the stream variable
  const stream = await OpenAIStream(payload);

  // Returning a Response object with the stream as the body
  return new Response(stream);
}
