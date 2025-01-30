// Function to handle not found routes
export function notFoundHandler(_, res) {
  res.status(404).send({
    status: 404, // Set the response status to 404 (Not Found)
    message: 'Route not Found', // Set the response message
  });
}
