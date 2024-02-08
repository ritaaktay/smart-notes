import express from "express";
import notesController from "../controllers/notes.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// Use auth middleware for all notes routes
router.use(auth);

// Get all notes for user
router.get("/", notesController.all);

// Add a note for user
router.post("/", notesController.add);

export default router;
