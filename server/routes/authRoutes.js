import express from "express";
import {
  registerUser,
  loginUser,
  googleAuthentication,
} from "../controllers/authController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";
import registerLimiter from "../middlewares/registerRatelimitMiddleware.js";

const authRoutes = express.Router();

authRoutes.post("/bundleup/register", registerLimiter, registerUser);
authRoutes.post("/bundleup/login", loginUser);
authRoutes.post("/google", googleAuthentication);
authRoutes.get("/verify", protectRoute, (req, res) => {
  res.json({ valid: true, userId: req.user });
});

export default authRoutes;
