const body = document.body;
const span = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnChangeColor.addEventListener("click", onCkickBtnChangeColor);

function onCkickBtnChangeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}
