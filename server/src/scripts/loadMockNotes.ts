import mongoose from "mongoose";
import Note from "../models/note.model.js";
import { MockNotes } from "../mocks/notes.mocks.js";

const createMockNotes = async () => {
  await mongoose.connect(process.env.MONGODB_URI!);
  try {
    await Note.create(MockNotes);
    console.log("Mock notes created ✨");
  } catch (e) {
    console.log(`Error creating mock notes: ${e}`);
  } finally {
    mongoose.connection.close();
  }
};

createMockNotes();
