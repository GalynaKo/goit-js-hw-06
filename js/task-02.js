const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//Напиши скрипт, который для каждого элемента массива ingredients:

////Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
///Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul#ingredients.
const ulEl = document.querySelector("#ingredients");
//console.log(ulEl);
//const li = ingredients.length;

for (let index = 0; index < ingredients.length; index++) {
  const liCreate = document.createElement("li");
  liCreate.textContent = ingredients[index];
  liCreate.classList = "item";

  //console.log(liCreate);
  ulEl.append(liCreate);
  console.log(ulEl);
}
