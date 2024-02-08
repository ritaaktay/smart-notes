import { VertexAI } from "@google-cloud/vertexai";
import { AIService } from "../types/index.js";

const projectID = "generated-wharf-412316";
class VertexAIService implements AIService {
  AI: any;

  constructor() {
    const vertexAI = new VertexAI({
      project: projectID,
      location: "us-central1",
    });

    this.AI = vertexAI.preview.getGenerativeModel({
      model: "gemini-pro",
      generation_config: { max_output_tokens: 256 },
    });
  }

  complete = async (prompt: string) => {
    try {
      const completion = await this.AI.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      });
      return (await completion.response).candidates[0].content.parts[0].text;
    } catch (e) {
      throw new Error(e);
    }
  };
}

export default new VertexAIService();
