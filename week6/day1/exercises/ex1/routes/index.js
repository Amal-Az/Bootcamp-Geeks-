import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('Bienvenue sur la page d’accueil !');
});

router.get('/about', (req, res) => {
  res.send('Bienvenue sur la page À propos !');
});

export default router;
