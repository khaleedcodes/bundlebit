import express from "express";
import selfPing  from "../controllers/selfPingController.js";

const selfPingRoutes = express.Router();

// Route to ping the server and check if it's alive
selfPingRoutes.get("/ping", selfPing);

export default selfPingRoutes;
