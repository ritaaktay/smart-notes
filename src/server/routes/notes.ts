import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all notes");
});

router.get("/:id", (req, res) => {
  res.send(`Get note ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Add a note");
});

router.put("/:id", (req, res) => {
  res.send(`Update note ${req.params.id}`);
});

export default router;
