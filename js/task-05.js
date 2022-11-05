// при наборе текста в инпуте input#name-input (событие input),
//подставляет его текущее значение в span#name - output.Если инпут пустой,
//  в спане должна отображаться строка "Anonymous".

//<input type="text" id="name-input" placeholder="Please enter your name" />
//<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
  inputEl: document.querySelector("input#name-input"),
  outputEl: document.querySelector("span#name-output"),
};
const eventEl = (evt) => {
  refs.inputEl.value.length === 0
    ? (refs.outputEl.textContent = "Anonymous")
    : (refs.outputEl.textContent = evt.currentTarget.value);
};
console.log(refs.inputEl);
refs.inputEl.addEventListener("input", eventEl);
