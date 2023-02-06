const categoriesEl = document.querySelector('#categories');

const itemsEl = categoriesEl.querySelectorAll('.item');

const numberOfCategories = itemsEl.length;
console.log('Number of categories:', numberOfCategories)

itemsEl.forEach(element => {
    const headingOfCategory = element.firstElementChild.textContent;
    console.log('Category: ', headingOfCategory);
    const listOfCategory = element.lastElementChild;
    const numberOfElementsInCategory = listOfCategory.children.length;
    console.log('Elements:',numberOfElementsInCategory);

})


