import express from "express";
import "dotenv/config";
import { aiController } from "../controllers/ai.controller.js";

const router = express.Router();

router.get("/summary", aiController.summarise);

export default router;
