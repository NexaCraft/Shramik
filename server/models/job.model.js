import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: true 
    },
    description: String,
    salary: Number,

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
    },

    city: String,
    area: String,

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    expiresAt: Date,
  },
  { timestamps: true }
);

jobSchema.index({ location: "2dsphere" });

const Job = mongoose.model("Job", jobSchema);
export default Job;
