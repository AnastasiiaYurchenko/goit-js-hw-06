const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li');

  itemEl.textContent = `${ingredient}`;
  itemEl.classList.add('item');

  ulEl.append(itemEl);
}
)
console.log(ulEl)



  

