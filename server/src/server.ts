import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import resumeRoutes from './routes/resumeRoutes.js';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Root Health & Status Landing Page (for Render browser preview)
app.get('/', (_req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ResumeCraft API Status</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background: #090d16;
          color: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
        }
        .card {
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 20px;
          padding: 40px;
          max-width: 520px;
          width: 100%;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(14, 165, 233, 0.15);
        }
        .icon {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          background: linear-gradient(135deg, #22d3ee, #0284c7, #4f46e5);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin-bottom: 20px;
          box-shadow: 0 10px 20px rgba(2, 132, 199, 0.3);
        }
        h1 { font-size: 24px; font-weight: 800; margin-bottom: 8px; color: #ffffff; }
        .subtitle { font-size: 14px; color: #94a3b8; margin-bottom: 24px; }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 9999px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
        }
        .pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .links {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 20px;
        }
        .btn {
          display: inline-block;
          padding: 10px 18px;
          border-radius: 12px;
          background: #1e293b;
          color: #38bdf8;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid #334155;
          transition: all 0.2s ease;
        }
        .btn:hover {
          background: #334155;
          color: #ffffff;
          border-color: #0284c7;
        }
        .info {
          margin-top: 24px;
          font-size: 11px;
          color: #64748b;
          border-top: 1px solid #1e293b;
          padding-top: 16px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="icon">📄</div>
        <h1>ResumeCraft Backend API</h1>
        <p class="subtitle">MERN Stack TypeScript REST Service</p>
        <div>
          <span class="badge">
            <span class="pulse"></span>
            Backend is Running & Online
          </span>
        </div>
        <p style="font-size: 13px; color: #cbd5e1; margin-bottom: 16px;">
          Database: <strong style="color: ${isDbConnected ? '#34d399' : '#fbbf24'}">${isDbConnected ? 'MongoDB Atlas Cloud (Connected)' : 'In-Memory / Local Sync'}</strong>
        </p>
        <div class="links">
          <a class="btn" href="/api/health" target="_blank">Health Check JSON</a>
          <a class="btn" href="/api/resumes" target="_blank">View Resumes API</a>
        </div>
        <div class="info">
          Port: ${PORT} &bull; Environment: ${process.env.NODE_ENV || 'production'} &bull; Server Time: ${new Date().toUTCString()}
        </div>
      </div>
    </body>
    </html>
  `);
});

// Routes
app.use('/api/resumes', resumeRoutes);

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'online',
    message: 'Backend is running',
    database: mongoose.connection.readyState === 1 ? 'MongoDB Atlas Connected' : 'In-Memory Sync Active',
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
