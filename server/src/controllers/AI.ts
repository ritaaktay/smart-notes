import OpenAI from "../services/openAI.js";
import VertexAI from "../services/vertexAI.js";
import { prompter } from "../utils/prompter.js";

import { MockNotes } from "../mocks/mockNotes.js";
const notes = MockNotes.map((note) => JSON.stringify(note)).join("\n");

// const AI = OpenAI;
const AI = VertexAI;

export const AIController = {
  summarise: async (req, res) => {
    const prompt = prompter.summary({ notes, dated: false });

    try {
      AI.complete(prompt).then((answer) => {
        res.send(answer);
      });
    } catch (e) {
      res.status(500).send(e.message);
    }
  },
};
