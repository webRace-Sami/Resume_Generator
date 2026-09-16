import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import resumeRoutes from './routes/resumeRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/resumes', resumeRoutes);

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Professional Resume & CV Generator API (MERN Stack)'
  });
});

// Connect to Database & Start Server
connectDB().finally(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Resume Generator Backend Server running on http://localhost:${PORT}`);
  });
});
