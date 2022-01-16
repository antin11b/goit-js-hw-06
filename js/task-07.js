const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onInputChange = (event) => {
textEl.style.fontSize = `${event.currentTarget.value}px`;
};
    
inputEl.addEventListener('input', onInputChange);