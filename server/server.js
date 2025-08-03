import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";

// Routes
import authRoutes from "./routes/auth.route.js";
import workerRoutes from "./routes/worker.route.js";
import employersRoutes from "./routes/employer.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

connectDB();

// APIs
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/workers", workerRoutes);
app.use("/api/v1/employers", employersRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
