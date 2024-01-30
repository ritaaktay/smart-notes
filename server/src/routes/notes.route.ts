import express from "express";
import notesController from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/", notesController.getAllNotes);

router.get("/:id", (req, res) => {
  res.send(`Get note ${req.params.id}`);
});

router.post("/", notesController.addNote);

router.put("/:id", (req, res) => {
  res.send(`Update note ${req.params.id}`);
});

export default router;
