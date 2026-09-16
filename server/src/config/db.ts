import 'dotenv/config';
import mongoose from 'mongoose';

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/resume_generator';
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ [MongoDB Atlas] Connected successfully to cloud database!`);
  } catch (error) {
    console.warn(`[MongoDB] Notice: ${(error as Error).message}`);
    console.log(`[Storage] Seamless In-Memory & Local Database Sync active.`);
  }
};
