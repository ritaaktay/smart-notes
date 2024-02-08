import express from "express";
import usersController from "../controllers/users.controller.js";

const router = express.Router();

router.post("/", usersController.add);

router.post("/login", usersController.login);

export default router;
