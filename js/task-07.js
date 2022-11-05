// который реагирует на изменение значения input#font-size-control (событие input)
//и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при
// перетаскивании ползунка будет меняться размер текста.

//<input id="font-size-control" type="range" min="16" max="96" />
///<br />
//<span id="text">Abracadabra!</span>
//console.log(document);
const refs = {
  inputEl: document.querySelector("input#font-size-control"),
  textEl: document.querySelector("span#text"),
};

//console.log(refs.inputEl);
refs.inputEl.addEventListener("input", changeFontSize);
function changeFontSize(event) {
  refs.textEl.style.fontSize = event.currentTarget.value + "px";
}
console.log(refs.inputEl);
