import express from "express";
import {
  getBitsInBundle,
  addBitToBundle,
  getPublicBundle,
  deleteBitFromBundle,
} from "../controllers/bundleController.js";
import protectRoute from "../middlewares/authMiddleware.js";

const bundleRoutes = express.Router();

bundleRoutes.post("/me/bits", protectRoute, addBitToBundle);
bundleRoutes.get("/me/bits", protectRoute, getBitsInBundle);
bundleRoutes.delete("/me/bits/:bitId", protectRoute, deleteBitFromBundle);
bundleRoutes.get("/:username", getPublicBundle);

export default bundleRoutes;
