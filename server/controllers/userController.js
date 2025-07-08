import User from "../models/User.js";
import Worker from "../models/Worker.js";
import Employer from "../models/Employer.js";
import { generateToken } from "../utils/generateToken.js";

// User Registration
export const register = async (req, res) => {
  try {
    const { email, password, role, profileData } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create profile based on role
    let profile;
    if (role === "worker") {
      profile = new Worker({
        ...profileData,
        userId: null, // Will be set after user creation
      });
      await profile.save();
    } else if (role === "employer") {
      profile = new Employer({
        ...profileData,
        userId: null, // Will be set after user creation
      });
      await profile.save();
    }

    // Create user
    const user = new User({
      email,
      password,
      role,
      profile: profile ? profile._id : null,
    });

    // Update profile with user ID
    if (profile) {
      profile.userId = user._id;
      await profile.save();
    }

    await user.save();

    // Generate token
    const token = generateToken(user);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

// User Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user);

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

// Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate({
      path: "profile",
      model: req.user.role === "worker" ? Worker : Employer,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching profile",
      error: error.message,
    });
  }
};

// Update User Profile
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update profile based on role
    const ProfileModel = user.role === "worker" ? Worker : Employer;
    const profile = await ProfileModel.findByIdAndUpdate(
      user.profile,
      req.body,
      { new: true }
    );

    res.json({
      message: "Profile updated successfully",
      profile,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating profile",
      error: error.message,
    });
  }
};
