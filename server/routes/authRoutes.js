import express from "express";
import {
  registerUser,
  loginUser,
  googleAuthentication,
  verifyToken,
  checkUsernameExists,
  checkEmailExists,
} from "../controllers/authController.js";
import protectRoute from "../middlewares/authMiddleware.js";
import registerLimiter from "../middlewares/registerRatelimitMiddleware.js";
import {
  registerEmailVerificationCode,
  validateEmailVerificationCode,
} from "../controllers/verificationCodeController.js";

const authRoutes = express.Router();

authRoutes.post("/bundlebit/register", registerLimiter, registerUser);
authRoutes.post("/bundlebit/login", loginUser);
authRoutes.post("/google", googleAuthentication);
authRoutes.get("/verify", protectRoute, verifyToken);
authRoutes.get("/check-username", checkUsernameExists);
authRoutes.get("/check-email", checkEmailExists);
authRoutes.post("/verification-code/generate", registerEmailVerificationCode);
authRoutes.post("/verification-code/validate", validateEmailVerificationCode);

export default authRoutes;
