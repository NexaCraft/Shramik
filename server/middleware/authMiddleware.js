import jwt from "jsonwebtoken";
import Worker from "../models/worker.model.js";
import Employer from "../models/employer.model.js";
import Admin from "../models/admin.model.js";

// Middleware to verify JWT token
export const verifyToken = async (req, res, next) => {
  try {
    // Check token in cookies
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request object based on user type
    switch (decoded.userType) {
      case "worker":
        req.user = await Worker.findById(decoded.userId).select("-password");
        break;
      case "employer":
        req.user = await Employer.findById(decoded.userId).select("-password");
        break;
      case "admin":
        req.user = await Admin.findById(decoded.userId).select("-password");
        break;
      default:
        return res.status(403).json({
          success: false,
          message: "Invalid user type",
        });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not found",
      });
    }

    req.userType = decoded.userType;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired",
      });
    }
    console.error("Authentication error:", error);
    res.status(500).json({
      success: false,
      message: "Server authentication error",
    });
  }
};

// Role-based authorization middleware
export const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.userType)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Insufficient permissions",
      });
    }
    next();
  };
};

// Additional middleware for rate limiting and security
export const rateLimiter = (req, res, next) => {
  // Simple in-memory rate limiting
  const requestCount = req.session?.requestCount || 0;

  if (requestCount >= 100) {
    return res.status(429).json({
      success: false,
      message: "Too many requests, please try again later",
    });
  }

  req.session = {
    ...req.session,
    requestCount: requestCount + 1,
  };

  next();
};
