import express from "express";
import usersController from "../controllers/users.controller.js";

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send(`Get user ${req.params.id}`);
});

router.get("/:id/notes", (req, res) => {
  res.send(`Get all notes for user ${req.params.id}`);
});

router.post("/", usersController.add);

router.put("/:id", (req, res) => {
  res.send(`Update user ${req.params.id}`);
});

export default router;
