const formEl = document.querySelector('.login-form');

const onFormElSubmit = (event) => {
    event.preventDefault();

    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        alert('Введите значения!');
    } else {

        const email = event.currentTarget.elements.email.value;
        const password = event.currentTarget.elements.password.value;

        const formElData = {
            email,
            password,
        };
    
        console.log(formElData);
        formEl.reset();
    }
};

formEl.addEventListener('submit', onFormElSubmit);