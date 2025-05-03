import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function protectRoute(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "no token, authorization denied" });
  } else if (!authHeader.startsWith("Bearer")) {
    return res.status(401).json({ error: "no token, authorization denied" });
  }
  const token = authHeader.split(" ")[1];
  // console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
