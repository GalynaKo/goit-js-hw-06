//Напиши скрипт управления формой логина.
//Обработка отправки формы form.login-form должна быть по событию submit.!!!OLK

//При отправке формы страница не должна перезагружаться.OLK
//Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны
// быть заполнены.!!ЩOK
//Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя
// поля будет именем свойства, а значение поля - значением свойства.Для доступа к элементам формы
//используй свойство elements.

//Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.ok
const form = document.querySelector("form.login-form");
const input = document.querySelector("input");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;

  const formData = new FormData(evt.currentTarget);
  console.log(formData);
  const email = formElements.email.value.trim().length;
  const password = formElements.password.value.trim().length;
  if (email === 0 || password === 0) {
    return alert("Все поля должны быть заполнены");
  }

  formData.forEach((value, name) => {
    console.log("onFormSubmit => name", name);
    console.log("onFormSubmit => value", value);
  });
  //console.log(`email:${email.value}, password: ${password.value} `);
  evt.currentTarget.reset();
}

//
