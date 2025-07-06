import mongoose from "mongoose";

const verificationSchema = new mongoose.Schema(
  {
    workerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Worker",
    },
    verifierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
    },
    verifiedAt: Date,
    method: {
      type: String,
      enum: ["call", "physical", "digital"],
    },
    comments: String,
  },
  { timestamps: true }
);

const Verification = mongoose.model("Verification", verificationSchema);
export default Verification;
