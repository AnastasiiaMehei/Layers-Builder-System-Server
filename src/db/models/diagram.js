import { model, Schema } from 'mongoose';

const diagramSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, auto: true },
    diagramName: { type: String, required: true },
    blocks: { type: Array, default: [] },
    connections: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true, versionKey: false },
);

export const diagramCollection = model('diagram', diagramSchema);
