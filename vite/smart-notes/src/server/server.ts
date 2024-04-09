import express, { NextFunction, Request, Response } from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import "dotenv/config";
import cookieParser from "cookie-parser";
import chalk from "chalk";
import { notesRouter, authRouter, AIRouter } from "./routes";
// import { auth } from "../middleware/auth.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

// TODO: Serve React app (?) PointIt

const API_BASE_ROUTE = "/api";

// const AUTHENTICATED_ROUTES = [
//   `${API_BASE_ROUTE}/notes`,
//   `${API_BASE_ROUTE}/ai`,
// ];

// AUTHENTICATED_ROUTES.forEach((route) => {
//   app.use(route, auth);
// });

// Routes
app.use(`${API_BASE_ROUTE}/notes`, notesRouter);
app.use(`${API_BASE_ROUTE}/login`, authRouter);
app.use(`${API_BASE_ROUTE}/signup`, authRouter);
app.use(`${API_BASE_ROUTE}/ai`, AIRouter);

// Error logging middleware
app.use(
  (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
    console.log(chalk.red(`${err.name}: ${err.message}`));
    res.status(500).send(`${err.name}: ${err.message}`);
  }
);

// Port is 3000 unless specified in .env
const PORT = process.env.PORT || 3000;

app.get("/api", (_req: Request, res: Response) => {
  res.send("Hello from Smart Notes API");
});

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log(chalk.white("Connected to MongoDB Atlas"));
  })
  .catch((e) =>
    console.log(chalk.red(`Cannot connect to MongoDB Atlas: ${e}`))
  );

// Start the server
ViteExpress.listen(app, Number(PORT), () =>
  console.log(chalk.white(`🚀 Smart Notes is listening on port: ${PORT}`))
);
