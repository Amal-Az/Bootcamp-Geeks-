import express from 'express';
import routes from './routes/index.js'; // n'oublie pas .js dans les imports ES modules

const app = express();

app.use('/', routes);

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
