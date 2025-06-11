const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Simuler une base de données
let posts = [
  { id: 1, title: 'Premier Post', content: 'Ceci est le premier article.' },
  { id: 2, title: 'Deuxième Post', content: 'Ceci est le deuxième article.' }
];

// ➤ GET /posts - récupérer tous les posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// ➤ GET /posts/:id - récupérer un post spécifique
app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ error: 'Post non trouvé' });
  }
  res.json(post);
});

// ➤ POST /posts - créer un nouveau post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title et content requis' });
  }
  const newPost = {
    id: posts.length + 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// ➤ PUT /posts/:id - mettre à jour un post 
app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ error: 'Post non trouvé' });
  }

  const { title, content } = req.body;
  post.title = title || post.title;
  post.content = content || post.content;
  res.json(post);
});

// ➤ DELETE /posts/:id - supprimer un post
app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Post non trouvé' });
  }
  posts.splice(index, 1);
  res.json({ message: 'Post supprimé avec succès' });
});

// ➤ Middleware pour gérer les routes inconnues
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// ➤ Middleware de gestion des erreurs serveur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur serveur' });
});

// ➤ Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
