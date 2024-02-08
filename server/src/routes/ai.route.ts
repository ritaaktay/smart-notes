import express from "express";
import { aiController } from "../controllers/ai.controller.js";

const router = express.Router();

router.get("/summary", aiController.summarise);

export default router;
