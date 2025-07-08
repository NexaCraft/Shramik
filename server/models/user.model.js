import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["worker", "employer", "admin"],
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "role",
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("User", userSchema);
export default Users;
