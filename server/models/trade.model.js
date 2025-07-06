import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema(
  {
    fromEmployerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
    },
    toEmployerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
    },
    workerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Worker",
    },
    startDate: Date,
    endDate: Date,
    status: {
      type: String,
      enum: ["pending", "accepted", "completed"],
      default: "pending",
    },
    commission: Number,
  },
  { timestamps: true }
);

const Trade = mongoose.model("Trade", tradeSchema);
export default Trade;
