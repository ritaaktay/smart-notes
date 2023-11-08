import express from "express";
import { notesRoute, usersRoute, openaiRoute } from "./routes/index.js";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use("/notes", notesRoute);
app.use("/users", usersRoute);
app.use("/ai", openaiRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((e) => console.log(`Cannot connect to MongoDB Atlas: ${e}`));

mongoose.connection.on("error", (e) => console.log(`MongoDB error: ${e}`));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `\u001b[1;32m Smart Notes is listening on port: ${PORT} \u001b[0m`
  );
});
