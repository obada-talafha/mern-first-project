import mongoose from "mongoose";

export const connectDB = async () => {
  // Database connection logic here
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // process.exit(1) code mean failure , 0 means success
  }
};
