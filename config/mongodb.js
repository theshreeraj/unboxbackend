import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1);
  }
};

export default connectDB;
