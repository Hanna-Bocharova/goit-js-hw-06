const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector("ul");
console.log(listEl);

for (const element of ingredients){
  const newLi = document.createElement("li");
  newLi.textContent = element;
  newLi.classList.add("item");
  listEl.append(newLi);
};

