//-----Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue
const refs = {
  valueEl: document.querySelector("#value"),

  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
};

const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
    return (refs.valueEl.textContent = this.value);
  },
  increment() {
    this.value += 1;
    return (refs.valueEl.textContent = this.value);
  },
};

refs.decrementBtn.addEventListener("click", function () {
  counterValue.decrement();
  console.log(counterValue);
});
refs.incrementBtn.addEventListener("click", function () {
  counterValue.increment();
  console.log(counterValue);
});
console.log(refs.decrementBtn);
console.log(refs.incrementBtn);
//console.log(counterValue);
