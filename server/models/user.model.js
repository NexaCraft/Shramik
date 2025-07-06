import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["worker", "employer"],
      required: true,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("User", userSchema);
export default Users;
