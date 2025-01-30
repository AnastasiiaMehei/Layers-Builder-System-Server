import { setupServer } from './server.js'; // Import setupServer function
import { initMongoConnection } from './db/initMongoConnection.js'; // Import initMongoConnection function
import { createDirIfNotExists } from './utils/createDirIfNotExists.js'; // Import createDirIfNotExists function
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js'; // Import constants for directory paths

// Async function to bootstrap the application
async function bootstrap() {
  await initMongoConnection(); // Initialize MongoDB connection
  await createDirIfNotExists(TEMP_UPLOAD_DIR); // Create temporary upload directory if it doesn't exist
  await createDirIfNotExists(UPLOAD_DIR); // Create upload directory if it doesn't exist
  setupServer(); // Setup and start the server
}

bootstrap(); // Call the bootstrap function to start the application
