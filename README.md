https://layers-builder-system-server.onrender.com
<!-- Data models (models): -->
diagram.js: Defines the schema for the diagrams collection in MongoDB.
session.js: Defines the schema for user sessions.
<!-- Services (services): -->
diagram.js: Contains asynchronous functions for interacting with the diagrams collection in the database.
<!-- Controllers (controllers): -->
diagram.js: Implements the logic for processing diagram-related requests.
<!-- Routing (routes): -->
diagram.js: Defines routes for operations with diagrams.
<!-- Middleware: -->
ctrlWrapper.js: A wrapper for controllers with error handling.
errorHandler.js: An error handler for the entire application.
notFoundHandler.js: A handler for cases when a route is not found.
<!-- Utilities: -->
createDirIfNotExists.js: Creates a directory if it doesn't exist.
env.js: A function for retrieving values from the .env file.
<!-- Main server module (server.js): -->
Configures the Express server.
Sets up CORS and other middleware.
Establishes routes.
Starts the server on the specified port.
<!-- The main functions of this code include: -->

- Creating and managing diagrams in the database.
- Processing API requests for diagrams.
- Managing user sessions.
- Handling errors and unknown routes.
- Managing static files (uploads).
- Configuring CORS for cross-domain request support.
