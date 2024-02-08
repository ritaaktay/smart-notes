import { notes } from "../services/mongoDB.js";

const notesController = {
  all: (req, res, next) => {
    notes
      .all()
      .then((notes) => {
        res.status(200).send(notes);
      })
      .catch(next);
  },
  addNote: (req, res, next) => {
    notes
      .add({
        title: req.body.title,
        content: req.body.content,
        user: "Test",
      })
      .then((note) => {
        res.send(`✅ Added note: ${note.title}`);
      })
      .catch(next);
  },
};

export default notesController;
