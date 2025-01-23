import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { UPLOAD_DIR } from './constants/index.js';
import { env } from './utils/env.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import diagramsRouter from './routers/diagram.js';
import { createProxyMiddleware } from 'http-proxy-middleware';

const whitelist = [
  'http://localhost:5173',
  "https://layers-builder-system.vercel.app/"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

const PORT = Number(env('PORT', '3001'));

export function setupServer() {
  const app = express();

  // Add proxy middleware
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://layers-builder-system-server.onrender.com',
      changeOrigin: true,
    })
  );

  app.use(cors(corsOptions));
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello dear user!',
    });
  });

  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use(cookieParser());
  app.use(diagramsRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
