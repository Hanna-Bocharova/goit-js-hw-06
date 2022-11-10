// {/* <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="">Abracadabra!</span> */}

const refs = {
    input: document.querySelector(`#font-size-control`),
    span: document.querySelector(`#text`),
}; 

refs.input.addEventListener(`input`, handleFontSize);

function handleFontSize(event){
   refs.input = Number(event.currentTarget.value);
   refs.span.style.fontSize = `${refs.input}px`;
}