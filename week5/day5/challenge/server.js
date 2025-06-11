const express = require('express');
const path = require('path');
const emojis = require('./emojis');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Sert index.html

let score = 0;

// Renvoie un emoji aléatoire + options
app.get('/api/question', (req, res) => {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = [correct.name];

  while (options.length < 4) {
    const option = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(option)) options.push(option);
  }

  // Mélange les options
  const shuffled = options.sort(() => 0.5 - Math.random());

  res.json({ emoji: correct.emoji, correct: correct.name, options: shuffled });
});

// Vérifie la réponse
app.post('/api/guess', (req, res) => {
  const { guess, correct } = req.body;
  if (guess === correct) {
    score++;
    res.json({ result: 'correct', score });
  } else {
    res.json({ result: 'incorrect', score });
  }
});

app.listen(3000, () => {
  console.log('🎮 Jeu démarré sur http://localhost:3000');
});
