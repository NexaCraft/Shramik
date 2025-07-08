import express from "express";
import {
  createEmployer,
  getEmployers,
} from "../controllers/employerController.js";

const router = express.Router();

// Employer Routes
router.post("/signup", createEmployer);
router.get("/", getEmployers);

export default router;
