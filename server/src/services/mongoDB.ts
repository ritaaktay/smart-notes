import Note from "../models/note.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const notes = {
  all: async () => {
    return await Note.find();
  },
  add: async ({ title, content, user }) => {
    const note = new Note({ title, content, user });
    await note.save();
    return note.id;
  },
};

export const users = {
  add: async ({ name, password, email }) => {
    const user = new User({ name, password, email });
    try {
      user.password = await bcrypt.hash(password, 10);
    } catch (e) {
      throw new Error("Error hashing password");
    }
    await user.save();
    return user;
  },
  one: async (match: object) => {
    const user = await User.findOne(match);
    return user;
  },
};
