// 1. В списку елементів розмітки потрібно змінити значення контенту з Item на Пункт.
// 2. Тексту кожного елементу списка потрібно змінити колір на рандомний.
// 3. Виведіть під списком повідомлення з інформацією про к-сть елементів списку.
let body = document.querySelector('body');
body.innerHTML = `
<ul class="js-gallery">
    <li>1-Item-1</li>
    <li>1-Item-1</li>
    <li>1-Item-1</li>
    <li>1-Item-1</li>
    <li>1-Item-1</li>
</ul>
`;

let list = document.querySelector('.js-gallery');
let arr = Array.from(list.children);
let liItems;

liItems = arr.map((el) => {
  if (el.textContent.includes('Item')) {
    let oldText = el.textContent;
    let indexOfText = oldText.indexOf('Item');
    let num = oldText.length - 1;
    let start = oldText.split('').splice(0, indexOfText).join('');
    let end = oldText
      .split('')
      .splice(indexOfText + 4)
      .join('');
    el.textContent = start + 'Пункт' + end;
    el.style.color = getRandomHexColor();
    return el.textContent;
  }
});

list.append(`${list.children.length} : numbers of el li`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log();
