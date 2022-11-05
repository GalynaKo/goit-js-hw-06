const category = document.querySelectorAll("#categories > .item");
console.log("Number of categoris: ", category.length);

category.forEach((element) => {
  console.log("Caterory: ", element.querySelector("h2").textContent);
  console.log("Elements: ", element.querySelectorAll("li").length);
});

//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
//Number of categories: 3

//Category: Animals
//Elements: 4

///Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5
