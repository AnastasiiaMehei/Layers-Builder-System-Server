import { diagramCollection } from "../db/models/diagram.js"; // Import the diagramCollection model

// Function to add a new diagram
export const addDiagram = async (data) => {
  const newDiagram = new diagramCollection(data); // Create a new instance of the diagramCollection with provided data
  return await newDiagram.save(); // Save the new diagram to the database and return the result
};

// Function to update an existing diagram
export const updateDiagram = async (id, data) => {
  const updatedDiagram = await diagramCollection.findByIdAndUpdate(id, data, { new: true }); // Find and update the diagram by ID with provided data
  return updatedDiagram; // Return the updated diagram
};

// Function to delete a diagram
export const deleteDiagram = async (id) => {
  const deletedDiagram = await diagramCollection.findByIdAndDelete(id); // Find and delete the diagram by ID
  return deletedDiagram; // Return the deleted diagram
};

// Function to get a diagram by ID
export const getDiagramById = async (id) => {
  const diagram = await diagramCollection.findById(id); // Find and get the diagram by ID
  return diagram; // Return the found diagram
};

// Function to get all diagrams
export const getAllDiagrams = async () => {
  const diagrams = await diagramCollection.find(); // Find and get all diagrams
  return diagrams; // Return the list of all diagrams
};
