const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Chemin vers le fichier JSON
const filePath = path.join(__dirname, '../data/tasks.json');

// Lire les tâches
function readTasks() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// Écrire les tâches
function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// GET /tasks
exports.getAllTasks = (req, res) => {
  try {
    const tasks = readTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la lecture des tâches' });
  }
};

// GET /tasks/:id
exports.getTaskById = (req, res) => {
  try {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la lecture de la tâche' });
  }
};

// POST /tasks
exports.createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description)
    return res.status(400).json({ error: 'title et description sont requis' });

  try {
    const tasks = readTasks();
    const newTask = {
      id: uuidv4(),
      title,
      description
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la création de la tâche' });
  }
};

// PUT /tasks/:id
exports.updateTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description)
    return res.status(400).json({ error: 'title et description sont requis' });

  try {
    const tasks = readTasks();
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Tâche non trouvée' });

    tasks[index] = { id: req.params.id, title, description };
    writeTasks(tasks);
    res.json(tasks[index]);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour' });
  }
};

// DELETE /tasks/:id
exports.deleteTask = (req, res) => {
  try {
    const tasks = readTasks();
    const updatedTasks = tasks.filter(t => t.id !== req.params.id);
    if (updatedTasks.length === tasks.length)
      return res.status(404).json({ error: 'Tâche non trouvée' });

    writeTasks(updatedTasks);
    res.json({ message: 'Tâche supprimée' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la suppression' });
  }
};
