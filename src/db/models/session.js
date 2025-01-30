import mongoose from 'mongoose'; // Import mongoose for MongoDB operations

// Define the schema for the session collection
const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // User ID is an ObjectId from the User collection
    ref: 'User', // Reference to the User collection
    required: true, // Required field
  },
  token: {
    type: String, // Token is a string
    required: true, // Required field
  },
  createdAt: {
    type: Date, // Created at is a date
    default: Date.now, // Default value is the current date and time
    expires: 3600, // Session expires after 1 hour (3600 seconds)
  },
});

// Create the model for the session collection
const Session = mongoose.model('Session', sessionSchema); // Export the Session model

export default Session; // Export the Session model
