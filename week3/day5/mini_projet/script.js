let currentColor = 'black';
let mouseDown = false;

function setColor(color) {
  currentColor = color;
}

function clearGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.style.backgroundColor = 'white');
}

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const grid = document.getElementById('grid');
for (let i = 0; i < 1500; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('mousedown', () => cell.style.backgroundColor = currentColor);
  cell.addEventListener('mouseover', () => {
    if (mouseDown) {
      cell.style.backgroundColor = currentColor;
    }
  });
  grid.appendChild(cell);
}