import express from "express";
import {
  getBitsInBundle,
  addBitToBundle,
} from "../controllers/bundleController.js";
import protectRoute from "../middlewares/authMiddleware.js";

const bundleRoutes = express.Router();

bundleRoutes.get("/me/bits", protectRoute, getBitsInBundle);
bundleRoutes.post("/me/bits", protectRoute, addBitToBundle);

export default bundleRoutes;
