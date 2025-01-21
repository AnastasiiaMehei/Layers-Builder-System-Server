import { diagramCollection } from "../db/models/diagram.js";

// Додавання нової діаграми
export const addDiagram = async (data) => {
  const newDiagram = new diagramCollection(data);
  return await newDiagram.save();
};

// Оновлення існуючої діаграми
export const updateDiagram = async (id, data) => {
  const updatedDiagram = await diagramCollection.findByIdAndUpdate(id, data, { new: true });
  return updatedDiagram;
};

// Видалення діаграми
export const deleteDiagram = async (id) => {
  const deletedDiagram = await diagramCollection.findByIdAndDelete(id);
  return deletedDiagram;
};

// Отримання діаграми за ID
export const getDiagramById = async (id) => {
  const diagram = await diagramCollection.findById(id);
  return diagram;
};

// Отримання всіх діаграм
export const getAllDiagrams = async () => {
  const diagrams = await diagramCollection.find();
  return diagrams;
};
