import express from "express";

// Notes Routes "/notes"
const notesRouter = express.Router();
notesRouter.get("/", () => {});
notesRouter.post("/", () => {});

// AI Routes "/ai"
const AIRouter = express.Router();
AIRouter.get("/summary", () => {});

// Auth Routes "/auth"
const authRouter = express.Router();
authRouter.post("/login", () => {});
authRouter.post("/signup", () => {});

export { authRouter, notesRouter, AIRouter };
