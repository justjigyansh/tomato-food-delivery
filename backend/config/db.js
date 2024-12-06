import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://justjigyansh:ABCDexam1234@cluster0.ipf1s.mongodb.net/food-del');
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
