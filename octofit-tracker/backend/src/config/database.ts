import mongoose from 'mongoose';

const connectionString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');
  } catch (error) {
    console.warn('MongoDB connection unavailable; continuing without database:', error);
  }
};

export default connectDB;
