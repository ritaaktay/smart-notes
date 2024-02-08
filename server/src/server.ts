import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { notesRoute, usersRoute, aiRoute } from "./routes/index.js";
import { green } from "./utils/green.js";
import { red } from "./utils/red.js";

const app = express();

// Parse incoming JSON
app.use(express.json());

// Serves the React app from the build folder
app.use(express.static("build"));

// Routes
app.use(`/api/notes`, notesRoute);
app.use(`/api/users`, usersRoute);
app.use(`/api/ai`, aiRoute);

// Error logging middleware
app.use((err, req, res, next) => {
  console.log(red(`${err.name} --> ${err.message}`));
  res.status(500).send(`${err.name}: ${err.message}`);
});

// Port is 8000 unless specified in .env
const PORT = process.env.PORT || 8000;

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(green("Connected to MongoDB Atlas"));
  })
  .catch((e) => console.log(red(`Cannot connect to MongoDB Atlas --> ${e}`)));

// Start the server
app.listen(PORT, () => {
  console.log(green(`🚀 Smart Notes is listening on port: ${PORT}`));
});
