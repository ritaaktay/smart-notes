import { users } from "../services/mongoDB.js";
import jwt from "jsonwebtoken";

const usersController = {
  add: async (req, res, next) => {
    try {
      const user = await users.one({ email: req.body.email });
      if (user) {
        return res.status(400).send("User with email already exists");
      } else {
        const user = await users.add(req.body);
        return res.status(201).json(user);
      }
    } catch (e) {
      res.status(500).send(`Error adding user: ${e.message}`);
    }
  },
  login: async (req, res, next) => {
    // TODO authenticate the users password
    // Authenticate user
    // https://www.youtube.com/watch?v=Ud5xKCYQTjM&ab_channel=WebDevSimplified

    try {
      const user = await users.one({ name: req.body.username });

      if (user == null) {
        return res.status(404).send("User not found");
      }
      const accessToken = jwt.sign(
        user.toJSON(),
        process.env.ACCESS_TOKEN_SECRET
      );

      // TODO cookies
      // Instead of sending token as a json in response
      // set the token in a cookie and redirect to home page
      // res.cookie("token", accessToken, { httpOnly: true });
      // res.redirect("/");

      return res.json({ accessToken });
    } catch (e) {
      return res.status(500).send(`Error generating token: ${e.message}`);
    }
  },
};

export default usersController;
