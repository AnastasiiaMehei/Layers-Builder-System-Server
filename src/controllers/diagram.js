import {
    addDiagram,
    updateDiagram,
    deleteDiagram,
    getDiagramById,
    getAllDiagrams,
  } from '../services/diagram.js';

  // Додавання нової діаграми
  export const addDiagramController = async (req, res) => {
    try {
      const savedDiagram = await addDiagram(req.body);
      res.status(201).json(savedDiagram);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Оновлення існуючої діаграми
  export const updateDiagramController = async (req, res) => {
    const { id } = req.params;
    try {
      const updatedDiagram = await updateDiagram(id, req.body);
      if (!updatedDiagram) {
        return res.status(404).json({ message: 'Diagram not found' });
      }
      res.json(updatedDiagram);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Видалення діаграми
  export const deleteDiagramController = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedDiagram = await deleteDiagram(id);
      if (!deletedDiagram) {
        return res.status(404).json({ message: 'Diagram not found' });
      }
      res.json({ message: 'Diagram deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Отримання діаграми за ID
  export const getDiagramController = async (req, res) => {
    const { id } = req.params;
    try {
      const diagram = await getDiagramById(id);
      if (!diagram) {
        return res.status(404).json({ message: 'Diagram not found' });
      }
      res.json(diagram);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Отримання всіх діаграм
  export const getAllDiagramsController = async (req, res) => {
    try {
      const diagrams = await getAllDiagrams();
      res.json(diagrams);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
