const socket = io();

let username = '';

function setUsername() {
  const input = document.getElementById('usernameInput');
  const name = input.value.trim();

  if (!name) {
    alert('Veuillez entrer un nom');
    return;
  }

  username = name;

  document.getElementById('usernameContainer').style.display = 'none';
  document.getElementById('chatContainer').style.display = 'flex';

  socket.emit('set_username', username);  // conforme au serveur
}

function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();

  if (!message) return;

  socket.emit('send_message', message);  // conforme au serveur

  input.value = '';
}

socket.on('chat_message', ({ user, message }) => {
  const msgBox = document.getElementById('messages');
  const msg = document.createElement('div');
  msg.classList.add('message');

  if (user === username) {
    msg.classList.add('self');
    msg.textContent = `Moi : ${message}`;
  } else {
    msg.classList.add('other');
    msg.textContent = `${user} : ${message}`;
  }

  msgBox.appendChild(msg);
  msgBox.scrollTop = msgBox.scrollHeight;
});

socket.on('user_list', (users) => {
  const usersList = document.getElementById('usersList');
  usersList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = user;
    usersList.appendChild(li);
  });
});
/************************************************/
socket.on('chat_history', (messages) => {
  const msgBox = document.getElementById('messages');
  msgBox.innerHTML = ''; // clear si tu veux
  messages.forEach(({ user, message }) => {
    const msg = document.createElement('div');
    msg.classList.add('message');
    if (user === username) {
      msg.classList.add('self');
      msg.textContent = `Moi : ${message}`;
    } else {
      msg.classList.add('other');
      msg.textContent = `${user} : ${message}`;
    }
    msgBox.appendChild(msg);
  });
  msgBox.scrollTop = msgBox.scrollHeight;
});
