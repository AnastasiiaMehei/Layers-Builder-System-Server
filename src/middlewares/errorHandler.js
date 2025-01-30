import { HttpError } from 'http-errors'; // Import HttpError from the http-errors library

// Error handling middleware function
export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status, // Set the response status to the error status
      message: err.name, // Set the response message to the error name
      data: err, // Include the error object in the response data
    });
    return; // Return to prevent further execution
  }

  res.status(500).json({
    status: 500, // Set the response status to 500 (Internal Server Error)
    message: 'Something went wrong', // Set a generic error message
    data: err.message, // Include the error message in the response data
  });
};
