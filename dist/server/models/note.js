import mongoose from "mongoose";
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
});
export const NoteModel = mongoose.model("Note", noteSchema);
