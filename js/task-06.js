const inputEl = document.querySelector('#validation-input');

const onInputBlur = (event) => {
    (event.target.value.length === Number(inputEl.dataset.length)) ?
        inputEl.setAttribute('class', 'valid') :
        inputEl.setAttribute('class', 'invalid');
    };

inputEl.addEventListener('blur', onInputBlur);

