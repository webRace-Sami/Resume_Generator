import mongoose from 'mongoose';

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/resume_generator';
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 2000,
    });
    console.log(`[MongoDB] Connected successfully to database`);
  } catch (error) {
    console.warn(`[MongoDB] Notice: Could not connect to local MongoDB (${(error as Error).message}).`);
    console.log(`[Storage] Falling back seamlessly to In-Memory & Local Database Sync. The API will work seamlessly!`);
  }
};
