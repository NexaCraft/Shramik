import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Common fields
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["worker", "company", "admin"],
      required: true,
    },
    city: String,
    area: String,
    termsAccepted: {
      type: Boolean,
      default: false,
    },

    // Worker fields
    fullName: String,
    age: Number,
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    skills: [String],
    experience: String,
    workPreference: String,
    availability: [
      {
        start: {
          type: Date,
          required: true,
        },
        end: {
          type: Date,
        },
      },
    ],

    // Company fields
    contactName: String,
    businessName: String,
    businessType: String,
    teamSize: String,
    businessDescription: String,
    address: String,
    workers: [String], // Could also use ObjectId if you track hired workers
    hiringFrequency: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
