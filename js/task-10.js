const inputEl = document.querySelector('#controls input');
const buttonCreatEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#boxes');

function onClick() {
  const amount = +inputEl.value;
  creatBoxes(amount);
 };
  
function creatBoxes(amount) {
  const arrDivItemEl = [];
  for (let i = 0; i < amount; i += 1) {
  const divItemEl = document.createElement("div");
  divItemEl.style.width = `${30+10*i}px`;
  divItemEl.style.height = `${30 + 10 * i}px`;
  divItemEl.style.backgroundColor = `${getRandomHexColor()}`;
  arrDivItemEl.push(divItemEl);
  divEl.append(...arrDivItemEl);
  }
};

function destroyBoxes() {
 divEl.innerHTML = '<div id="boxes"></div>';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

buttonCreatEl.addEventListener('click', onClick);
buttonDestroyEl.addEventListener('click', destroyBoxes);