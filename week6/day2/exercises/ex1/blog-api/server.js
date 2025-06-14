const express = require('express');
const app = express();
const postsRoutes = require('./server/routes/postsRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/posts', postsRoutes);

// 404 error handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Server error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
