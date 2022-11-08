const refs = {
  styleEl: document.querySelector("style"),
  inputEl: document.querySelector("#validation-input"),
};
refs.inputEl.addEventListener("blur", onInputBlur);

const numberEl = Number(refs.inputEl.dataset.length);
console.log(numberEl);

function onInputBlur(evt) {
  console.log(evt.currentTarget.value.length);
  evt.currentTarget.value.trim().length == numberEl
    ? refs.inputEl.classList.add("valid") &&
      refs.inputEl.classList.remove("invalid")
    : refs.inputEl.classList.add("invalid") &&
      refs.inputEl.classList.remove("valid");
}

//#validation-input {
// border: 3px solid #bdbdbd;
//}

//#validation-input.valid {
// border-color: #4caf50;
//}

//#validation-input.invalid {
// border-color: #f44336;
//}
