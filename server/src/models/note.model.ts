import mongoose from "mongoose";
import { Note } from "../types/index.js";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  user: {
    type: String,
    required: true,
  },
});

export default mongoose.model<Note>("Note", noteSchema);
