const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector('#ingredients');
const itemsIngredientsEl = [];
function createListEl(arr) {
  arr.map(item => {
    const listLi = document.createElement('li');
    listLi.classList.add('item');
    listLi.textContent = item;
    itemsIngredientsEl.push(listLi);
  });
  listIngredients.append(...itemsIngredientsEl);
}
createListEl(ingredients);
