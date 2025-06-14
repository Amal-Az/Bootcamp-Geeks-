import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

// Pour pouvoir utiliser __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;
const users = {};      // socket.id => username
const messages = [];   // stockage des messages (en mémoire)

// Servir les fichiers statiques depuis /public
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('Nouvel utilisateur connecté');

  socket.on('set_username', (username) => {
    users[socket.id] = username;
    io.emit('user_list', Object.values(users));

    // Envoyer l'historique des messages au nouvel utilisateur
    socket.emit('chat_history', messages);
  });

  socket.on('send_message', (message) => {
    const user = users[socket.id];
    const msgObj = { user, message };
    messages.push(msgObj);

    // Garder seulement les 50 derniers messages
    if (messages.length > 50) messages.shift();

    io.emit('chat_message', msgObj);
  });

  socket.on('disconnect', () => {
    delete users[socket.id];
    io.emit('user_list', Object.values(users));
  });
});

server.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
