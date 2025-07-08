import express from "express";
import { createWorker, getWorkers } from "../controllers/workerController.js";

const router = express.Router();

// Worker Routes
router.post("/signup", createWorker);
router.get("/", getWorkers);

export default router;
