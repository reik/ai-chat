import { z } from "zod";
import { tool } from "ai";

export const weatherTool = tool({
  description: "Get the weather for a location",
  parameters: z.object({
    city: z.string().describe("The city to get the weather for"),
  }),
  execute: async ({ city }: { city: string }) => {
    // In a real application, you would fetch the weather here
    console.log(`Fetching weather for ${city}`);
    return {
      temperature: Math.floor(Math.random() * 30),
      unit: "celsius",
    };
  },
});
