import express from "express";

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send(`Get user ${req.params.id}`);
});

router.get("/:id/notes", (req, res) => {
  res.send(`Get all notes for user ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Add a user");
});

router.put("/:id", (req, res) => {
  res.send(`Update user ${req.params.id}`);
});

export default router;
