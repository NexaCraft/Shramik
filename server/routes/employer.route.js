import express from "express";
import { getDashboardData } from "../controllers/employerController.js";
import {
  verifyToken,
  authorize,
  rateLimiter,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Apply middleware to all routes
router.use(verifyToken);
router.use(authorize(["employer"]));
router.use(rateLimiter);

// Dashboard routes
router.get("/profile/:id", getDashboardData);
// router.post("/jobs", createJobPosting);
// router.get("/job-applications", getJobApplications);
// router.patch(
//   "/job-applications/:applicationId/status",
//   updateJobApplicationStatus
// );

export default router;
