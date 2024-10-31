function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30; 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box); 
    boxSize += 10;
  }
  
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}

createButton.addEventListener('click', () => {
  const amount = Number(input.value.trim());

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  destroyBoxes();

  createBoxes(amount);
  
  input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);


createButton.style.backgroundColor = '#4e75ff';
destroyButton.style.backgroundColor = '#ff4e4e';
