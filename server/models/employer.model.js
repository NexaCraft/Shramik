import mongoose from "mongoose";

const employerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    contactName: {
      type: String,
      required: true,
      trim: true,
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
    businessName: {
      type: String,
      required: true,
      trim: true,
    },
    businessType: {
      type: String,
      required: true,
    },
    teamSize: {
      type: String,
    },
    businessDescription: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    desiredWorkerTypes: [
      {
        type: String,
      },
    ],
    hiringFrequency: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Employer = mongoose.model("Employer", employerSchema);
export default Employer;
