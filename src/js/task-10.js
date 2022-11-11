const refs = {
  inputEl: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



function valueInput(event) {
  refs.inputEl.value = event.currentTarget.value;
}
refs.inputEl.addEventListener("input", valueInput);


function todo() {
  const amount = refs.inputEl.value;
  createBoxes(amount);
}
refs.btnCreate.addEventListener(`click`, todo);

function createBoxes() {

 const basicSize = 30;
 for (let i = 1; i <= amount; i += 1)  {
   const boxlist = document.createElement("div");
   const size = basicSize + i*10;

   boxlist.style.cssText = `Width: ${size}px; height:${size}px; backgroundColor: ${getRandomHexColor()} `;
   refs.boxesEl.appendChild(boxlist);
 }
   
};


function destroyBoxes(event) {
  refs.boxesEl.textContent = "";
}

refs.btnDestroy.addEventListener(`click`, destroyBoxes);





