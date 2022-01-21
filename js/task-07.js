const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = `56px`;

const onInputChange = (event) => {
textEl.style.fontSize = `${event.currentTarget.value}px`;
};
    
inputEl.addEventListener('input', onInputChange);