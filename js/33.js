// TODO list

// Існує форма з одним інпутом, куди вводиться текст. І є чекбокс.
//    Поки чекбокс не натиснутий, кнопка на формі неактивна.
//    Натисканням Enter в інпуті або натисканням на кнопку Add, в список нижче, додається todo-нотатка.
//    Очистити інпут
//    Прибрати перезавантаження, звертатися через форму (elements) та ім'я інпуту
//    При натисканні на todo-замітку у списку, вона стає виконаною, тобто. текст закреслюється (клас complete)
//    Чекбокс при додаванні нотатки знову має стати не вибраним, а кнопка знову недоступною
//    Додати кнопку Видалити на кожну нотатку (+функціонал видалення)

const form = document.querySelector("form");
// const input = document.querySelector('#todoInput');
const checkbox = document.querySelector("#checkbox");
const btn = document.querySelector("#btn");
const list = document.querySelector(".list");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    btn.disabled = false;
    btn.textContent = "Add ToDo";
  } else {
    btn.disabled = true;
    btn.textContent = "disabled";
  }
});
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const formelEments = e.currentTarget.elements;
  const input = formelEments["todoInput"];
  // const checkbox = formelEments['checkbox'];
  // const btn = formelEments['btn'];

  if(!input.value){return}
  list.insertAdjacentHTML(
    "afterbegin",
    `<li><p class="todoValue">${input.value}</p><button class="btnDelete">Delete</button></li>`
  );

  input.value = "";
  checkbox.checked = false;
  btn.disabled = true;
}

list.addEventListener("click", isCompleted);
function isCompleted(e) {
  if (e.target.nodeName !== "P") {
    return;
  }

  console.log(e.target.classList.toggle("complited"));
}
