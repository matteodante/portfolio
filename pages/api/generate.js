import { OpenAIStream } from "../../utils/openAIStream";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  let prompt;
  try {
    const { prompt: reqPrompt } = await req.json();
    prompt = reqPrompt;
    console.log("Got prompt", prompt);
  } catch (err) {
    return new Response("Invalid JSON data in the request", { status: 400 });
  }

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 100,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);
  return new Response(stream);
}
