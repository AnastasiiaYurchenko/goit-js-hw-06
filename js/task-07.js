// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const fontSizeControlEl = document.querySelector('#font-size-control');
console.log(fontSizeControlEl);
const textEl = document.querySelector('#text');
// console.log(textEl);

textEl.style.fontSize = `${fontSizeControlEl.value}px`;
// console.log(textEl.style.fontSize);
// console.log(fontSizeControlEl.value);
 
const onFontSizeControlElInput = (event) => {
        const newFontSize = Number(event.currentTarget.value);
    // console.log(newFontSize);

    textEl.style.fontSize = `${newFontSize}px`;
    // console.log(textEl.style.fontSize);
};

fontSizeControlEl.addEventListener('input', onFontSizeControlElInput);
