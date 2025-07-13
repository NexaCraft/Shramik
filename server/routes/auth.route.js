import express from "express";
import { body, validationResult } from "express-validator";
import {
  registerWorker,
  registerEmployer,
  loginEmployer,
  loginWorker,
  logout,
} from "../controllers/authController.js";
import { verifyToken, rateLimiter } from "../middleware/authMiddleware.js";

const router = express.Router();

// Validation middleware
const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  };
};

// Worker Registration
router.post(
  "/worker/register",
  validate([
    body("fullName")
      .trim()
      .notEmpty()
      .withMessage("Full name is required")
      .isLength({ min: 2, max: 50 })
      .withMessage("Full name must be between 2 and 50 characters"),
    body("phone")
      .trim()
      .isMobilePhone("any")
      .withMessage("Invalid phone number")
      .isLength({ min: 10, max: 10 })
      .withMessage("Phone number must be 10 digits"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
      )
      .withMessage(
        "Password must include uppercase, lowercase, number, and special character"
      ),
    body("email").optional().isEmail().withMessage("Invalid email address"),
  ]),
  rateLimiter,
  registerWorker
);

// Worker Login
router.post(
  "/worker/login",
  validate([
    body("phone")
      .trim()
      .isMobilePhone("any")
      .withMessage("Invalid phone number")
      .isLength({ min: 10, max: 10 })
      .withMessage("Phone number must be 10 digits"),
    body("password").notEmpty().withMessage("Password is required"),
  ]),
  rateLimiter,
  loginWorker
);

// Employer Registration
router.post(
  "/employer/register",
  validate([
    body("contactName")
      .trim()
      .notEmpty()
      .withMessage("Contact name is required")
      .isLength({ min: 2, max: 50 })
      .withMessage("Contact name must be between 2 and 50 characters"),
    body("businessName")
      .trim()
      .notEmpty()
      .withMessage("Business name is required")
      .isLength({ min: 2, max: 100 })
      .withMessage("Business name must be between 2 and 100 characters"),
    body("phone")
      .trim()
      .isMobilePhone("any")
      .withMessage("Invalid phone number")
      .isLength({ min: 10, max: 10 })
      .withMessage("Phone number must be 10 digits"),
    body("email").optional().isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
      )
      .withMessage(
        "Password must include uppercase, lowercase, number, and special character"
      ),
    body("businessType")
      .optional()
      .isIn([
        "Construction Company",
        "Home Services",
        "Restaurant/Hotel",
        "Retail Store",
        "Manufacturing",
        "Event Management",
        "Real Estate",
        "Individual/Homeowner",
        "Other",
      ])
      .withMessage("Invalid business type"),
  ]),
  rateLimiter,
  registerEmployer
);

// Employer Login
router.post(
  "/employer/login",
  validate([
    body("phone")
      .trim()
      .isMobilePhone("any")
      .withMessage("Invalid phone number")
      .isLength({ min: 10, max: 10 })
      .withMessage("Phone number must be 10 digits"),
    body("password").notEmpty().withMessage("Password is required"),
  ]),
  rateLimiter,
  loginEmployer
);

// Logout (common for all user types)
router.post("/logout", verifyToken, logout);

export default router;
