import 'dotenv/config'; // Import dotenv/config to load environment variables from a .env file

// Function to retrieve environment variables with an optional default value
export function env(data, defaultValue) {
  const value = process.env[data]; // Retrieve the environment variable from process.env

  if (value) return value; // Return the value if it exists
  if (defaultValue) return defaultValue; // Return the default value if it is provided

  // Throw an error if the environment variable is missing and no default value is provided
  throw new Error(`Missing: process.env['${data}'].`);
}
