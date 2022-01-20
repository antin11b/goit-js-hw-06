const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const defaultTextSize = textEl.style.fontSize += `${(+inputEl.getAttribute('max') - +inputEl.getAttribute('min')) / 2 + +inputEl.getAttribute('min')}px`;

const onInputChange = (event) => {
textEl.style.fontSize = `${event.currentTarget.value}px`;
};
    
inputEl.addEventListener('input', onInputChange);