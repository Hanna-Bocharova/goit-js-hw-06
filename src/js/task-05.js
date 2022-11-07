const refs = {
    input: document.querySelector("input#name-input"),
    h1: document.querySelector("span#name-output"),
}

refs.input.addEventListener(`input`, onInrutFull);
refs.input.removeEventListener(`input`, onInrutEmpty);

function onInrutFull (event) {
    console.log(event.currentTarget.value);
    refs.h1.textContent = event.currentTarget.value ? event.currentTarget.value : Anonymous;
}

function onInrutEmpty (event) {
    console.log(event.currentTarget.value);
    refs.h1.textContent = !event.currentTarget.value;
}