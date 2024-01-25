import mongoose from "mongoose";
import "dotenv/config";
import { NoteModel } from "../models/note.js";
import { MockNotes } from "../mocks/mockNotes.js";

const createMockNotes = async () => {
  await mongoose.connect(process.env.MONGODB_URI!);
  try {
    await NoteModel.create(MockNotes);
    console.log("Mock notes created ✨");
  } catch (e) {
    console.log(`Error creating mock notes: ${e}`);
  } finally {
    mongoose.connection.close();
  }
};

createMockNotes();
