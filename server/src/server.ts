import express from "express";
import { notesRoute, usersRoute, aiRoute } from "./routes/index.js";
import { green } from "./utils/green.js";
import "dotenv/config";
import mongoose from "mongoose";
import { red } from "./utils/red.js";

const app = express();

app.use(express.json());

app.use(express.static("build"));

app.use(`/api/notes`, notesRoute);
app.use(`/api/users`, usersRoute);
app.use(`/api/ai`, aiRoute);

app.use((err, req, res, next) => {
  console.log(red(`${err.name} --> ${err.message}`));
  res.status(500).send(`${err.name}: ${err.message}`);
});

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(green("Connected to MongoDB Atlas"));
  })
  .catch((e) => console.log(red(`Cannot connect to MongoDB Atlas --> ${e}`)));

app.listen(PORT, () => {
  console.log(green(`🚀 Smart Notes is listening on port: ${PORT}`));
});
