import express from "express";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { weatherTool } from "../src/tools/weather";
import cors from "cors";
import { createReadStream } from "fs";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { messages } = req.body;

  const result = await streamText({
    model: openai("gpt-4o"),
    tools: { weather: weatherTool },
    maxToolRoundtrips: 5,
    messages,
  });

  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8",
  });

  const reader = result.toAIStream().getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    res.write(value);
  }
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
