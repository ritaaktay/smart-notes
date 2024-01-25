import express from "express";
import "dotenv/config";
import { AIController } from "../controllers/AI.js";

const router = express.Router();

router.post("/summary", AIController.summarise);

export default router;
