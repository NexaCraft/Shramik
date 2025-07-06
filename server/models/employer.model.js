import mongoose from "mongoose";

const employerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    companyName: String,
    industryType: String,
    location: String,
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Employer = mongoose.model("Employer", employerSchema);
export default Employer;
