import mongoose from 'mongoose';

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('MongoDB Atlas connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};
