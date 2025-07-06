import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    employerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
      required: true,
    },
    title: String,
    description: String,
    skillRequired: String,
    jobType: {
      type: String,
      enum: ["full-time", "part-time"],
    },
    location: String,
    startDate: Date,
    endDate: Date,
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
