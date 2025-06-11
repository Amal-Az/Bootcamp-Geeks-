const express = require('express');
const app = express();

// 2. Middleware pour lire les données JSON dans les requêtes POST
app.use(express.json());

// 3. Simuler une base de données avec un tableau de livres
let books = [
  { id: 1, title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', publishedYear: 1943 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 3, title: 'L’Étranger', author: 'Albert Camus', publishedYear: 1942 }
];

// 4. Route GET /api/books - lire tous les livres
app.get('/api/books', (req, res) => {
  res.json(books);
});

// 5. Route GET /api/books/:bookId - lire un seul livre
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// 6. Route POST /api/books - créer un nouveau livre
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'All fields are required: title, author, publishedYear' });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// 7. Lancer le serveur sur le port 5000
app.listen(5000, () => {
  console.log('Serveur en cours d’exécution sur http://localhost:5000');
});
