import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1);
  }
};
