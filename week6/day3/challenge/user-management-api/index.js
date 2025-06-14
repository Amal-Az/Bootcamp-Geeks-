const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, 'users.json');

app.use(express.json());
app.use(express.static('public'));

// Helper: Lire les utilisateurs depuis le fichier
function readUsers() {
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Helper: Écrire les utilisateurs dans le fichier
function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// ✅ Route POST /register
app.post('/register', async (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  if (!name || !lastName || !email || !username || !password) {
    return res.status(400).send('Missing fields');
  }

  const users = readUsers();

  // Vérifier si le username OU le password existe déjà
  const existingUser = users.find(
    user => user.username === username || bcrypt.compareSync(password, user.password)
  );

  if (existingUser) {
    return res.status(400).send('Username already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now(),
    name,
    lastName,
    email,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  writeUsers(users);

  res.send('Hello your account is now created');
});

// ✅ Route POST /login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const users = readUsers();
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(404).send('username is not registered');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send('Invalid password');
  }

  res.send('login');
});

// GET /users : Voir tous les utilisateurs (pour tests)
app.get('/users', (req, res) => {
  const users = readUsers();
  res.json(users);
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const users = readUsers();
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

  if (userIndex === -1) return res.status(404).send('User not found');

  const updatedUser = { ...users[userIndex], ...req.body };
  users[userIndex] = updatedUser;

  writeUsers(users);
  res.send('User updated');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
