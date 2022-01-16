// const counterValue = 
const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action="increment"]'); 
const valueEl = document.querySelector('#value');

const counter = {
    counterValue: 0,
    step: 1,
    
    increment() {
        this.counterValue += this.step;
    },
    
    decrement() {
        this.counterValue -= this.step;
    },
    
    valueChangeUI() {
        valueEl.textContent = this.counterValue;
    },
}

const onDecrementButtonClick = () => {
    counter.decrement();
    counter.valueChangeUI();
};

const onIncrementButtonClick = () => {
    counter.increment();
    counter.valueChangeUI();
};

decrementButtonEl.addEventListener('click', onDecrementButtonClick);
incrementButtonEl.addEventListener('click', onIncrementButtonClick);