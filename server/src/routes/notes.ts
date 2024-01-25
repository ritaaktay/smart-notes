import express from "express";
import { NotesController } from "../controllers/notes.js";

const router = express.Router();

router.get("/", NotesController.All);

router.get("/:id", (req, res) => {
  res.send(`Get note ${req.params.id}`);
});

router.post("/", NotesController.Create);

router.put("/:id", (req, res) => {
  res.send(`Update note ${req.params.id}`);
});

export default router;
