const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');


const makeListIngredients = ingredients.map((ingredient) => {
  const vegetablesEl = document.createElement('li');
      vegetablesEl.classList.add('item');
      vegetablesEl.textContent = ingredient;
      return vegetablesEl;
});

list.append(...makeListIngredients);