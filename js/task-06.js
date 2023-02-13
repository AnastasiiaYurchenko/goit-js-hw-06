// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

//     Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//     Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

let inputEl = document.querySelector('#validation-input');

// 1-ше рішення з inputEl.classList = []

// значення атрибута data-length
// console.log(inputEl.dataset.length);

// const onInputElBlur = (event) => {
//     // довжина введених символів в інпут
//     // console.log(event.currentTarget.value.length);

//     // inputEl.classList = [];
//     if (event.currentTarget.value.length == inputEl.dataset.length) {
//         inputEl.classList.add('valid');
//         console.log(inputEl);
//     } else {
//         inputEl.classList.add('invalid');
//         console.log(inputEl);
//     }
// }


//2-ге рішення з перевіркою наявності класу і його видалення

const onInputElBlur = (event) => {

       if (event.currentTarget.value.length == inputEl.dataset.length) {
        inputEl.classList.add('valid');
         if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid');
        }
    } else {
        inputEl.classList.add('invalid');
        if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid');
        }
    }
}

inputEl.addEventListener('blur', onInputElBlur);


