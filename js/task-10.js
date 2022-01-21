const inputEl = document.querySelector('#controls input');
const buttonCreatEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#boxes');


function onClick() {
  const amount = +inputEl.value;
  creatBoxes(amount);
  };
  
function creatBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const divItemEl = document.createElement("div");
    const defaultBoxSize = 30;
  divItemEl.style.width = `${defaultBoxSize + 10 * i}px`;
  divItemEl.style.height = `${defaultBoxSize + 10 * i}px`;
  divItemEl.style.backgroundColor = `${getRandomHexColor()}`;
  fragment.append(divItemEl);
  }
  divEl.append(fragment);
  inputEl.value = '';
  };

function destroyBoxes() {
  divEl.innerHTML = '';
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

buttonCreatEl.addEventListener('click', onClick);
buttonDestroyEl.addEventListener('click', destroyBoxes);

