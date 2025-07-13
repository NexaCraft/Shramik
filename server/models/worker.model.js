import mongoose from "mongoose";

const workerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: /^\d{10}$/,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 65,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    experience: {
      type: String,
      required: true,
      enum: ["fresher", "1-3", "3-5", "5+"],
    },
    city: {
      type: String,
      required: true,
    },
    workPreference: {
      type: String,
      required: true,
      enum: ["full-time", "part-time", "contract", "freelance"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    profile: {
      profilePicture: {
        type: String,
      }
    },
    password: {
      type: String,
      required: true,
    },
    registrationDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Worker = mongoose.model("Worker", workerSchema);
export default Worker;
