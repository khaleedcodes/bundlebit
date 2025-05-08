import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel.js";
dotenv.config();

async function protectRoute(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!(authHeader && authHeader.startsWith("Bearer")))
    return res.status(401).json({ message: "No token, authorization denied" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

export default protectRoute;
