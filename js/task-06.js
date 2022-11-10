  const inputEl = document.querySelector("#validation-input");
  const valueEl = inputEl.dataset.length;
  
  inputEl.addEventListener('blur', onblur);
  
  function onblur(event) {
    if(event.currentTarget.value.length ===Number(valueEl)) {
      return inputEl.classList = "valid";
    }
      inputEl.classList='invalid';
    }
