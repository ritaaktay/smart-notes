import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // TODO cookies
  // Or req.cookies.token instead of using headers

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      // TODO invalid token
      // Or delete cookie and redirect to login page
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};
