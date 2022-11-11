const refs = {
    decrementBtn: document.querySelector(`[data-action="decrement"]`),
    incrementBtn: document.querySelector(`[data-action="increment"]`),
    counterValue: document.querySelector(`#value`),
    
}


let value = 0;
refs.counterValue.textContent = 0;


function onCountIncrement() {
value += 1;
refs.counterValue.textContent = value;
}
refs.incrementBtn.addEventListener(`click`, onCountIncrement);

function onCountDecrement() {
value -= 1;
refs.counterValue.textContent = value;
    
}
refs.decrementBtn.addEventListener(`click`, onCountDecrement);



