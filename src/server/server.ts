import express from "express";
import { notes, users } from "./routes/index.js";

const app = express();

app.use(express.json());

app.use("/notes", notes);
app.use("/users", users);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
