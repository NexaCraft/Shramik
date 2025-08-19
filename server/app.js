import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import workerRoutes from "./routes/worker.route.js";
import employerRoutes from "./routes/employer.route.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json()); // ✅ Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // ✅ Parse form data
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/workers", workerRoutes);
app.use("/api/v1/employers", employerRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
