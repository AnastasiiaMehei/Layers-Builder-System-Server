import { Router, json } from 'express'; // Import Router and json parser from Express
import ctrlWrapper from '../middlewares/ctrlWrapper.js'; // Import ctrlWrapper middleware
import {
  addDiagramController,
  deleteDiagramController,
  getAllDiagramsController,
  getDiagramController,
  updateDiagramController
} from '../controllers/diagram.js'; // Import diagram controllers

const diagramsRouter = Router(); // Create a new router instance
const jsonParser = json(); // Create a JSON parser instance

// Define route to add a new diagram
diagramsRouter.post('/api/diagrams', jsonParser, ctrlWrapper(addDiagramController));

// Define route to get all diagrams
diagramsRouter.get('/api/diagrams', ctrlWrapper(getAllDiagramsController));

// Define route to get a diagram by ID
diagramsRouter.get('/api/diagrams/:id', ctrlWrapper(getDiagramController));

// Define route to update a diagram by ID
diagramsRouter.put('/api/diagrams/:id', jsonParser, ctrlWrapper(updateDiagramController));

// Define route to delete a diagram by ID
diagramsRouter.delete('/api/diagrams/:id', ctrlWrapper(deleteDiagramController));

export default diagramsRouter; // Export the router
