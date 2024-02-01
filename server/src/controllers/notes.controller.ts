import mongoDB from "../services/mongoDB.js";

const notesController = {
  getAllNotes: async (req, res) => {
    try {
      const notes = await mongoDB.getAllNotes();
      res.send(notes);
    } catch (e) {
      res.send(`Cannot get notes: ${e}`);
    }
  },
  addNote: async (req, res) => {
    try {
      const id = await mongoDB.addNote({
        title: req.body.title,
        content: req.body.content,
        user: "Test",
      });
      res.send(`✅ Added note: ${id}`);
    } catch (e) {
      res.send(`❌ Failed to add note: ${e}`);
    }
  },
};

export default notesController;
