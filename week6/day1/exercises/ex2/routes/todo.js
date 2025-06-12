import { Router } from 'express';
const router = Router();

// "Base de données" en mémoire
let todos = [];
let idCounter = 1;

// 🔹 GET tous les todos
router.get('/', (req, res) => {
  res.json(todos);
});

// 🔹 POST nouveau todo
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Le champ "title" est requis.' });

  const newTodo = { id: idCounter++, title, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// 🔹 PUT mise à jour todo par ID
router.put('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const { title, done } = req.body;

  const todo = todos.find(t => t.id === todoId);
  if (!todo) return res.status(404).json({ message: 'To-do non trouvé.' });

  if (title !== undefined) todo.title = title;
  if (done !== undefined) todo.done = done;

  res.json(todo);
});

// 🔹 DELETE todo par ID
router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === todoId);

  if (index === -1) return res.status(404).json({ message: 'To-do non trouvé.' });

  const deleted = todos.splice(index, 1);
  res.json({ message: 'To-do supprimé.', todo: deleted[0] });
});

export default router;
