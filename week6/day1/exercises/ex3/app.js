import express from 'express';
import bookRoutes from './routes/quiz.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// Mount the router at /ex3/books
app.use('/ex3/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
