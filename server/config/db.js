import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("❌ MONGODB_URI is not defined in .env");
  }

  try {
    mongoose.connection.on("connected", () =>
      console.log("✅ Database Connected Successfully")
    );

    // ✅ Simplified for Mongoose 7+
    await mongoose.connect(uri);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
