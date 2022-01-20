// const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('button.change-color');
const textEl = document.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const onClickButton = () => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  textEl.textContent = currentColor;
};

buttonEl.addEventListener('click', onClickButton);