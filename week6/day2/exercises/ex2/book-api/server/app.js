require('dotenv').config({ path: __dirname + '/../.env' });

const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

app.use(express.json());

app.use('/api/books', bookRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Route introuvable' });
});

app.listen(5000, () => {
    console.log('Serveur démarré sur http://localhost:5000');
});
