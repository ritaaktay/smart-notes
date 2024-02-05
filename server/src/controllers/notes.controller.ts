import mongoDB from "../services/mongoDB.js";

const notesController = {
  getAllNotes: (req, res, next) => {
    mongoDB
      .getAllNotes()
      .then((notes) => {
        res.status(200).send(notes);
      })
      .catch(next);
  },
  addNote: (req, res, next) => {
    mongoDB
      .addNote({
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
