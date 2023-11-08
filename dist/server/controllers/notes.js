import { NoteModel } from "../models/note.js";
export const NotesController = {
    All: async (req, res) => {
        try {
            const notes = await NoteModel.find();
            res.send(notes);
        }
        catch (e) {
            res.send(`Cannot get notes: ${e}`);
        }
    },
    Create: async (req, res) => {
        const note = new NoteModel({ title: req.body, content: req.body.content });
        try {
            await note.save();
            res.send("Added note");
        }
        catch (e) {
            res.send(`Failed to add note: ${e}`);
        }
    },
};
