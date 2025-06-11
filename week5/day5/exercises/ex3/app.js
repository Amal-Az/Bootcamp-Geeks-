const express = require('express');
const app = express();

// Importation du module de données
const { fetchPosts } = require('./data/dataService');

// Middleware JSON
app.use(express.json());

// Route GET /api/posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('✅ Données récupérées avec succès');
    res.status(200).json(posts);
  } catch (error) {
    console.error('❌ Erreur :', error.message);
    res.status(500).json({ message: 'Erreur lors de la récupération des posts' });
  }
});

// Démarrage du serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
