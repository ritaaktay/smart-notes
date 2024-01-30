import AI from "openai";
import { AIService } from "../types/ai.types.js";

class OpenAIService implements AIService {
  AI: AI;

  constructor() {
    this.AI = new AI({ apiKey: process.env.OPENAI_API_KEY });
  }
  complete = async (prompt: string) => {
    try {
      const completion = await this.AI.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-4-0613",
      });
      return completion.choices[0].message.content;
    } catch (e) {
      throw new Error(e);
    }
  };
}

export default new OpenAIService();
