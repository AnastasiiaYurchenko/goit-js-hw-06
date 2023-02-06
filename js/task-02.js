const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
// console.log(ingredientsEl);

const itemEl = document.createElement('li');
console.log(itemEl);

ingredients.forEach(ingredient => {
  console.log(ingredient);
  itemEl.textContent = `${ingredient}`;
  ingredientsEl.append(itemEl);
}
)



  

