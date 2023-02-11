
// Рішення з привязкою до значення поля кнопки


const counterValueEl = document.querySelector('#value');
 let counterValue = counterValueEl.textContent;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(Number(decrementBtn.textContent));

const incrementBtn = document.querySelector('button[data-action="increment"]');

function onDecrementBtnClick() {
    counterValueEl.textContent = Number(counterValueEl.textContent) + Number(decrementBtn.textContent);
};

const onIncrementBtnClick = () => {
    counterValueEl.textContent = Number(counterValueEl.textContent) + Number(incrementBtn.textContent);
};

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

// Стандартне рішення

// let counterValue = 0;

// const counterValueEl = document.querySelector('#value');
// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');

// const onDecrementBtnClick = () => {
//     counterValue -= 1;
//     counterValueEl.textContent = counterValue;
// };

// const onIncrementBtnClick = () => {
//     counterValue += 1;
//     counterValueEl.textContent = counterValue;
// };

// decrementBtn.addEventListener("click", onDecrementBtnClick);
// incrementBtn.addEventListener("click", onIncrementBtnClick);

