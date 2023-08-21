import mongoose, { Document, Schema } from 'mongoose';

interface ITodo extends Document {
  item: string;
  completed: boolean;
  id: number
}

const TodoSchema: Schema = new Schema({
  item: { type: String, required: true },
  completed: { type: Boolean, default: false },
  id: { type: Number }
});

export default mongoose.model<ITodo>('Todo', TodoSchema);