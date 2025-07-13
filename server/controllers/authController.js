import bcrypt from "bcryptjs";
import Worker from "../models/worker.model.js";
import Employer from "../models/employer.model.js";
import Admin from "../models/admin.model.js";
import { generateToken } from "../utils/generateToken.js";

// Cookie options for secure token storage
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: process.env.COOKIE_MAX_AGE,
};

export const registerUser = async (Model, req, res) => {
  try {
    const { phone, password, ...userData } = req.body;

    const existingUser = await Model.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(process.env.PASSWORD_SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Model({
      ...userData,
      phone,
      password: hashedPassword,
    });
    await newUser.save();

    const token = generateToken(newUser._id, Model.modelName.toLowerCase());

    res.cookie("token", token, cookieOptions);

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      user: newUser,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Server registration error",
    });
  }
};

export const loginUser = async (Model, req, res) => {
  try {
    const { phone, password } = req.body;

    const user = await Model.findOne({ phone });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user._id, Model.modelName.toLowerCase());
    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: user,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server login error",
    });
  }
};

// Specific registration and login methods
export const registerWorker = (req, res) => registerUser(Worker, req, res);
export const loginWorker = (req, res) => loginUser(Worker, req, res);
export const registerEmployer = (req, res) => registerUser(Employer, req, res);
export const loginEmployer = (req, res) => loginUser(Employer, req, res);
export const registerAdmin = (req, res) => registerUser(Admin, req, res);
export const loginAdmin = (req, res) => loginUser(Admin, req, res);

export const logout = (req, res) => {
  res.clearCookie("token", cookieOptions);
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
