const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');
  
const ingredientsItems = ingredients.map(ingredient => {
const ingredientsListItemEl = document.createElement('li');
  ingredientsListItemEl.textContent = ingredient;
  ingredientsListItemEl.classList.add('item');
  return ingredientsListItemEl;
});

ingredientsListEl.append(...ingredientsItems);