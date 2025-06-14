const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/api', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});
