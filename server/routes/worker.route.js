import express from "express";
import { getDashboardData } from "../controllers/workerController.js";
import {
  verifyToken,
  authorize,
  rateLimiter,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Apply middleware to all routes
router.use(verifyToken);
router.use(authorize(["worker"]));
router.use(rateLimiter);

// Dashboard routes
router.get("/profile/:id", getDashboardData);
// router.put('/profile', updateWorkerProfile);
// router.get('/job-applications', getJobApplications);
// router.patch('/notifications/:notificationId/read', markNotificationAsRead);

export default router;
