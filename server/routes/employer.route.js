import express from "express";
import {
  getAllEmployers,
  getEmployerById,
  updateEmployerProfile,
  searchEmployers,
} from "../controllers/employerController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAllEmployers); // Optionally restrict to admin
router.get("/search", searchEmployers);
router.get("/:id", getEmployerById);
router.put("/me", protect, authorize("company"), updateEmployerProfile);

export default router;
