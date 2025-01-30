import express from 'express'; // Import express for creating the server
import cors from 'cors'; // Import cors for handling Cross-Origin Resource Sharing
import cookieParser from 'cookie-parser'; // Import cookieParser for parsing cookies
import { UPLOAD_DIR } from './constants/index.js'; // Import constant for upload directory
import { env } from './utils/env.js'; // Import env function for environment variables
import { errorHandler } from './middlewares/errorHandler.js'; // Import error handler middleware
import { notFoundHandler } from './middlewares/notFoundHandler.js'; // Import not found handler middleware
import diagramsRouter from './routers/diagram.js'; // Import diagrams router
import { setupProxy } from '../proxyConfig.js'; // Import setupProxy function for proxy configuration

// const whitelist = [
//   'http://localhost:5173',
//   "https://layers-builder-system.vercel.app/"
// ]; // Uncommented code for whitelist CORS

// CORS options for allowed origins and other settings
const corsOptions = {
  origin: ['http://localhost:5173', 'https://layers-builder-system.vercel.app'],
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200, // For legacy browser support
};

// Retrieve PORT from environment variables or set default to 3002
const PORT = Number(env('PORT', '3002'));

// Function to set up and start the server
export function setupServer() {
  const app = express(); // Create an express application

  // Apply middleware
  app.use(cors(corsOptions)); // Apply CORS with specified options
  app.use(express.json()); // Add this line to parse JSON bodies
  app.use(diagramsRouter); // Use diagrams router for handling diagram-related routes
  setupProxy(app); // Set up proxy middleware

  // Define root route with a welcome message
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello dear user!', // Respond with a welcome message
    });
  });

  // Serve static files from the upload directory
  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use(cookieParser()); // Use cookie parser middleware
  app.use(notFoundHandler); // Use not found handler middleware
  app.use(errorHandler); // Use error handler middleware

  // Start the server and listen on the specified port
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log the server running message
  });
}
