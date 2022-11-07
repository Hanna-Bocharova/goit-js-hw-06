
// const inputEl = document.querySelector("#validation-input");
// const valueEl = inputEl.dataset.length;
// inputEl.addEventListener('blur', onblur);
// function onblur(event) {
//   if(event.currentTaget.value.length === Number(valueEl)) {
//     return inputEl.classList = "valid";
//   }
//   else {
//     inputEl.classList= "invalid";
    
//   }
// }

const inputEl = document.querySelector("#validation-input");
const valueEl = inputEl.dataset.length;

inputEl.addEventListener('blur', onblur);

function onblur(event) {
  if(event.currentTaget.value.length ===Number(valueEl)) {
    return inputEl.classList = "valid";
  }
    inputEl.classList='invalid';
  }


