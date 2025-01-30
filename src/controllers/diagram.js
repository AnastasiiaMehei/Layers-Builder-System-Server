import {
  addDiagram,
  updateDiagram,
  deleteDiagram,
  getDiagramById,
  getAllDiagrams,
} from '../services/diagram.js'; // Import diagram service functions

// Controller to add a new diagram
export const addDiagramController = async (req, res) => {
  try {
    const savedDiagram = await addDiagram(req.body); // Call the addDiagram function with request body data
    res.status(201).json(savedDiagram); // Respond with status 201 and the saved diagram
  } catch (error) {
    res.status(400).json({ message: error.message }); // Respond with status 400 and error message if an error occurs
  }
};

// Controller to update an existing diagram
export const updateDiagramController = async (req, res) => {
  const { id } = req.params; // Extract diagram ID from request parameters
  try {
    const updatedDiagram = await updateDiagram(id, req.body); // Call the updateDiagram function with ID and request body data
    if (!updatedDiagram) {
      return res.status(404).json({ message: 'Diagram not found' }); // Respond with status 404 if diagram is not found
    }
    res.json(updatedDiagram); // Respond with the updated diagram
  } catch (error) {
    res.status(400).json({ message: error.message }); // Respond with status 400 and error message if an error occurs
  }
};

// Controller to delete a diagram
export const deleteDiagramController = async (req, res) => {
  const { id } = req.params; // Extract diagram ID from request parameters
  try {
    const deletedDiagram = await deleteDiagram(id); // Call the deleteDiagram function with the diagram ID
    if (!deletedDiagram) {
      return res.status(404).json({ message: 'Diagram not found' }); // Respond with status 404 if diagram is not found
    }
    res.json({ message: 'Diagram deleted successfully' }); // Respond with success message if deletion is successful
  } catch (error) {
    res.status(400).json({ message: error.message }); // Respond with status 400 and error message if an error occurs
  }
};

// Controller to get a diagram by ID
export const getDiagramController = async (req, res) => {
  const { id } = req.params; // Extract diagram ID from request parameters
  try {
    const diagram = await getDiagramById(id); // Call the getDiagramById function with the diagram ID
    if (!diagram) {
      return res.status(404).json({ message: 'Diagram not found' }); // Respond with status 404 if diagram is not found
    }
    res.json(diagram); // Respond with the retrieved diagram
  } catch (error) {
    res.status(400).json({ message: error.message }); // Respond with status 400 and error message if an error occurs
  }
};

// Controller to get all diagrams
export const getAllDiagramsController = async (req, res) => {
  try {
    const diagrams = await getAllDiagrams(); // Call the getAllDiagrams function
    res.json(diagrams); // Respond with the list of all diagrams
  } catch (error) {
    res.status(400).json({ message: error.message }); // Respond with status 400 and error message if an error occurs
  }
};
