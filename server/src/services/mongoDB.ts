import Note from "../models/notes.model.js";

class MongoDB {
  getAllNotes = async () => {
    try {
      return await Note.find();
    } catch (e) {
      throw e;
    }
  };

  addNote = async ({ title, content, user }) => {
    const note = new Note({ title, content, user });
    try {
      await note.save();
      return note.id;
    } catch (e) {
      throw e;
    }
  };
}

export default new MongoDB();
