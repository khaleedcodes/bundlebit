import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.get("/verify", protectRoute, (req, res) => {
  res.json({ valid: true, userId: req.user });
});

export default authRoutes;
