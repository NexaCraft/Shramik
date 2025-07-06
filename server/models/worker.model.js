import mongoose from "mongoose";

const calendarSchema = new mongoose.Schema({
  date: Date,
  area: String,
  skillAvailable: String,
});

const historySchema = new mongoose.Schema({
  jobId: mongoose.Schema.Types.ObjectId,
  employerId: mongoose.Schema.Types.ObjectId,
  rating: Number,
  review: String,
  completedAt: Date,
});

const workerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    skills: [String],
    experienceYears: Number,
    location: String,
    verified: {
      type: Boolean,
      default: false,
    },
    trustScore: {
      type: Number,
      default: 0,
    },
    calendar: [calendarSchema],
    workHistory: [historySchema],
  },
  { timestamps: true }
);

const Worker = mongoose.model("Worker", workerSchema);
export default Worker;
