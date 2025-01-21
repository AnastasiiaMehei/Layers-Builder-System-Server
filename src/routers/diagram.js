import { Router, json } from 'express';
import ctrlWrapper from '../middlewares/ctrlWrapper.js';
import {
  addDiagramController,
  deleteDiagramController,
  getAllDiagramsController,
  getDiagramController,
  updateDiagramController
} from '../controllers/diagram.js';

const diagramsRouter = Router();
const jsonParser = json();

diagramsRouter.post('/api/diagrams', jsonParser, ctrlWrapper(addDiagramController));
diagramsRouter.get('/api/diagrams', ctrlWrapper(getAllDiagramsController));
diagramsRouter.get('/api/diagrams/:id', ctrlWrapper(getDiagramController));
diagramsRouter.put('/api/diagrams/:id', jsonParser, ctrlWrapper(updateDiagramController));
diagramsRouter.delete('/api/diagrams/:id', ctrlWrapper(deleteDiagramController));

export default diagramsRouter;
