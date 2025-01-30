import { model, Schema } from 'mongoose'; // Import model and Schema from Mongoose

// Define the schema for the diagram collection
const diagramSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, auto: true }, // Unique ID, automatically generated
    diagramName: { type: String, required: true }, // Diagram name, required field
    blocks: { type: Array, default: [] }, // Array of blocks, default is an empty array
    connections: { type: Array, default: [] }, // Array of connections, default is an empty array
    createdAt: { type: Date, default: Date.now }, // Creation date, default is the current date and time
  },
  { timestamps: true, versionKey: false }, // Add timestamps (createdAt and updatedAt) and disable versioning
);

// Create the model for the diagram collection
export const diagramCollection = model('diagram', diagramSchema); // Export the diagram collection model
