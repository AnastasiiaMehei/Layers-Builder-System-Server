// Function to wrap a controller function with error handling
export default function ctrlWrapper(controller) {
  return async (req, res, next) => {
    try {
      await controller(req, res, next); // Execute the controller function
    } catch (error) {
      next(error); // Pass any errors to the next middleware
    }
  };
}
