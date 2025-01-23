import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { UPLOAD_DIR } from './constants/index.js';
import { env } from './utils/env.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import diagramsRouter from './routers/diagram.js';
import { setupProxy } from '../proxyConfig.js';

// const whitelist = [
//   'http://localhost:5173',
//   "https://layers-builder-system.vercel.app/"
// ];

const corsOptions = {
  origin: ['http://localhost:5173', 'https://layers-builder-system.vercel.app'],
  credentials: true,
  optionsSuccessStatus: 200,
};

const PORT = Number(env('PORT', '3002'));

export function setupServer() {
  const app = express();

  // Add proxy middleware
  app.use(cors(corsOptions));
  app.use(express.json()); // Add this line to parse JSON bodies
  app.use(diagramsRouter);
  setupProxy(app);
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello dear user!',
    });
  });

  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use(cookieParser());
  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
