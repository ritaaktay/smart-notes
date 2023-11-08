import mongoose, { Document } from "mongoose";
import "dotenv/config";
import { NoteModel } from "../server/models/note.js";
import { MockNotes } from "./mockNotes.js";

const createMockNotes = async () => {
  try {
    await NoteModel.create(MockNotes);
    console.log("Mock notes created ✨");
  } catch (e) {
    console.log(`Error creating mock notes: ${e}`);
  } finally {
    mongoose.connection.close();
  }
};

mongoose.connect(process.env.MONGODB_URI).then(() => {
  createMockNotes();
});
