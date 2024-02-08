import { notes } from "../services/mongoDB.js";

const notesController = {
  // Get all notes for user
  all: (req, res, next) => {
    // Here we have access to the user on req.user
    // So we can query for notes with the user's id
    notes
      .all()
      .then((notes) => {
        return notes.filter((note) => note.user == req.user.name);
      })
      .then((notes) => {
        res.status(200).send(notes);
      })
      .catch(next);
  },
  // Add a note for user
  add: (req, res, next) => {
    // Here we have access to the user on req.user
    // So we can save the note with that user's id
    notes
      .add({
        title: req.body.title,
        content: req.body.content,
        user: req.user.name,
      })
      .then((note) => {
        res.send(`✅ Added note: ${note.title}`);
      })
      .catch(next);
  },
};

export default notesController;
