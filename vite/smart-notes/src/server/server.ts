import express, { NextFunction, Request, Response } from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import "dotenv/config";
import cookieParser from "cookie-parser";
import chalk from "chalk";

const app = express();

app.use(express.json());
app.use(cookieParser());

// Routes
// app.use(`/api/notes`);
// app.use(`/api/login`);
// app.use(`/api/signup`);
// app.use(`/api/ai`);

// Error logging middleware
app.use(
  (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
    console.log(chalk.red(`${err.name} --> ${err.message}`));
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
    console.log(chalk.red(`Cannot connect to MongoDB Atlas --> ${e}`))
  );

// Start the server
ViteExpress.listen(app, Number(PORT), () =>
  console.log(chalk.white(`🚀 Smart Notes is listening on port: ${PORT}`))
);
