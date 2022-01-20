const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

function onInputChange(event) {
    event.currentTarget.value === "" ?
    outputEl.textContent = 'Anonymous' :
    outputEl.textContent = event.currentTarget.value;
    };

inputEl.addEventListener('input', onInputChange);