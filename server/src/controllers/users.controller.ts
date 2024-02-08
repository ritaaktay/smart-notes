import { users } from "../services/mongoDB.js";

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
};

export default usersController;
