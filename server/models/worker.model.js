import mongoose from "mongoose";

// const calendarSchema = new mongoose.Schema({
//   date: Date,
//   area: String,
//   skillAvailable: String,
// });

// const historySchema = new mongoose.Schema({
//   jobId: mongoose.Schema.Types.ObjectId,
//   employerId: mongoose.Schema.Types.ObjectId,
//   rating: Number,
//   review: String,
//   completedAt: Date,
// });

const workerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
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
    // calendar: [calendarSchema],
    // workHistory: [historySchema],
  },
  { timestamps: true }
);

const Worker = mongoose.model("Worker", workerSchema);
export default Worker;
