import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`MongoDB connected: ${db.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

export default connectDB;
