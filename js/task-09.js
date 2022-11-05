const refs = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBg = (evt) => {
  const changeColor = getRandomHexColor();
  refs.body.style.backgroundColor = changeColor;
  refs.span.textContent = changeColor;
};
refs.button.addEventListener("click", changeBg);
//console.log(getRandomHexColor);
