import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { connectToDB } from './config/db';

const PORT = process.env.PORT || 4000;

const start = async () => {
  await connectToDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
};

start();
