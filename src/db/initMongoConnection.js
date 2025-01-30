import mongoose from 'mongoose'; // Import mongoose for MongoDB operations
import { env } from '../utils/env.js'; // Import env function for accessing environment variables

// Retrieve environment variables for MongoDB connection
const user = env('MONGODB_USER'); // MongoDB user
const pwd = env('MONGODB_PASSWORD'); // MongoDB password
const url = env('MONGODB_URL'); // MongoDB URL
const db = env('MONGODB_DB'); // MongoDB database name

// Construct the MongoDB URI using the environment variables
const URI = `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=water-tracker-backend-101-team-5`;

// Function to initialize MongoDB connection
export async function initMongoConnection() {
  try {
    await mongoose.connect(URI); // Attempt to connect to MongoDB using the URI
    console.log('Mongo connection successfully established!'); // Log success message if connection is established
  } catch (error) {
    console.error(error); // Log error if connection fails
    throw error; // Throw error to handle it elsewhere
  }
}
