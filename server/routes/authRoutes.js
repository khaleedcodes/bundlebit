import express from "express";
import {
  registerUser,
  loginUser,
  googleAuthentication,
  verifyToken,
} from "../controllers/authController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";
import registerLimiter from "../middlewares/registerRatelimitMiddleware.js";

const authRoutes = express.Router();

authRoutes.post("/bundlebits/register", registerLimiter, registerUser);
authRoutes.post("/bundlebits/login", loginUser);
authRoutes.post("/google", googleAuthentication);
authRoutes.get("/verify", protectRoute, verifyToken);

export default authRoutes;
("");
