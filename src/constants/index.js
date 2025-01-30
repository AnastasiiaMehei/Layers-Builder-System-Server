import path from 'node:path'; // Import path module from Node.js

// Constants for sort order
export const SORT_ORDER = {
  ASC: 'asc', // Ascending order
  DESC: 'desc', // Descending order
};

// Constants for time durations
export const FIFTEEN_MINUTES = 15 * 60 * 1000; // 15 minutes in milliseconds
export const ONE_DAY = 24 * 60 * 60 * 1000; // 1 day in milliseconds

// Constants for SMTP (Simple Mail Transfer Protocol) configuration
export const SMTP = {
  SMTP_HOST: 'SMTP_HOST', // SMTP host
  SMTP_PORT: 'SMTP_PORT', // SMTP port
  SMTP_USER: 'SMTP_USER', // SMTP user
  SMTP_PASSWORD: 'SMTP_PASSWORD', // SMTP password
  SMTP_FROM: 'SMTP_FROM', // SMTP from address
};

// Paths for various directories
export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates'); // Path to templates directory
export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp'); // Path to temporary upload directory
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads'); // Path to uploads directory

// Constants for Cloudinary configuration
export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUD_NAME', // Cloudinary cloud name
  API_KEY: 'API_KEY', // Cloudinary API key
  API_SECRET: 'API_SECRET', // Cloudinary API secret
};

// Path to Swagger documentation file
export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json'); // Path to Swagger JSON file
