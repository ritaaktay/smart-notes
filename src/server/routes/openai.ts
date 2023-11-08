import express from "express";
import OpenAI from "openai";
import "dotenv/config";
import { MockNotes } from "../../mocks/mockNotes.js";

const router = express.Router();

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const allNotes = MockNotes.map((note) => note.content).join("\n");

router.post("/summary", async (req, res) => {
  const prompt = `Here are some of my personal notes, could you summarise what I have been thinking? \n ${allNotes}`;
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-4-0613",
    });
    res.send(completion.choices[0].message.content);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default router;
