const arrayItem = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${arrayItem.length}`);
arrayItem.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
  
});
