

// const counterValueEl = document.querySelector('#value');
// let counterValue = counterValueEl.textContent;

// const decrementBtn = document.querySelector('button[data-action="decrement"]');

// const incrementBtn = document.querySelector('button[data-action="increment"]');

// const onDecrementBtnClick = () => {
//     counterValueEl.textContent += decrementBtn.textContent;
//      console.log( counterValueEl.textContent);
// };

// const onIncrementBtnClick = () => {
//     counterValueEl.textContent += incrementBtn.textContent;
//      console.log(counterValueEl.textContent);

// };

// decrementBtn.addEventListener("click", onDecrementBtnClick);
// incrementBtn.addEventListener("click", onIncrementBtnClick);

let counterValue = 0;

const counterValueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const onDecrementBtnClick = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
};

const onIncrementBtnClick = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

