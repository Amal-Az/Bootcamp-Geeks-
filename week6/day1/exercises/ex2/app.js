import express from 'express';
import todoRoutes from './routes/todo.js';

const app = express();
const PORT = 3000;

// Middleware pour lire le JSON dans les requêtes
app.use(express.json());

// Monter les routes à l'URL de base /ex2/todos
app.use('/ex2/todos', todoRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
