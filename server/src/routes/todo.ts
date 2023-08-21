import express, { Request, Response, Router } from 'express';
import Todo from '../models/Todo';

const router: Router = express.Router();


router.get('/', async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get todos' });
  }
});


router.post('/', async (req: Request, res: Response) => {
  try {
    const { id, completed, item } = req.body;
    const todo = new Todo({
      item,
      id,
      completed
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create todo' });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  if (!req?.params?.id) {
    return res.status(400).json({ 'message': 'ID parameter is required.' });
  }

  const item = await Todo.findOne({ id: req.params.id }).exec();
  if (!item) {
    return res.status(204).json({ "message": `No employee matches ID ${req.body.id}.` });
  }
  if (req.body) item.completed = req.body.completed;
  const result = await item.save();
  res.json(result);
});

router.delete('/:id', async (req: Request, res: Response) => {
  if (!req?.params?.id) return res.status(400).json({ 'message': 'Employee ID required.' });

    const item = await Todo.findOne({ id: req.params.id }).exec();
    if (!item) {
        return res.status(204).json({ "message": `No employee matches ID ${req.body.id}.` });
    }
    const result = await item.deleteOne();
    res.json(result);
});

export default router;