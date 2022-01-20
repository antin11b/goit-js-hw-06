const inputEl = document.querySelector('#validation-input');

const onInputBlur = (event) => {
    const eventLength = event.target.value.length;
    const dataLength = Number(inputEl.dataset.length);
    const value = eventLength === dataLength
    ? 'valid'
    : 'invalid';
    inputEl.setAttribute('class', value);
    };

inputEl.addEventListener('blur', onInputBlur);

