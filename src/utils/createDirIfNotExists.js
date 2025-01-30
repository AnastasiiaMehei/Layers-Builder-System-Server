import fs from 'node:fs/promises'; // Import the fs module from Node.js with promise-based methods

// Function to create a directory if it doesn't exist
export const createDirIfNotExists = async (url) => {
  try {
    await fs.access(url); // Check if the directory exists
  } catch (err) {
    if (err.code === 'ENOENT') { // If the error code is 'ENOENT' (meaning the directory does not exist)
      await fs.mkdir(url); // Create the directory
    }
  }
};
