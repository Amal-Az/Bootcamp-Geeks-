const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

// Middleware pour lire les requêtes JSON
app.use(express.json());

// Définir les routes
app.use('/tasks', taskRoutes);

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
