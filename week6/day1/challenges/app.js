import express from 'express';
import quizRoutes from './routes/quiz.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// Monter le routeur
app.use('/quiz', quizRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
