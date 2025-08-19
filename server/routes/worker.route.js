import express from 'express';
import {
  getAllWorkers,
  getWorkerProfile,
  updateWorkerProfile,
  searchWorkers,
} from '../controllers/workerController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public or restricted routes
router.get('/', protect, getAllWorkers); // For admins/companies
router.get('/search', searchWorkers);
router.get('/:id', getWorkerProfile);

// Protected route for logged-in worker
router.put('/me', protect, updateWorkerProfile);

export default router;
