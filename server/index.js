import axios from "axios";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

import authRoutes from "./routes/authRoutes.js";
import bundleRoutes from "./routes/bundleRoutes.js";
import selfPingRoutes from "./routes/selfPingRoutes.js";
import job from "./utils/cron.js";

dotenv.config();

connectDB();
job.start();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bundles", bundleRoutes)
app.use("/api/", selfPingRoutes)

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
