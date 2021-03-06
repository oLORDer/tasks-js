document.querySelector('body').innerHTML = `
<div class="wrapper">
  <p>Hello world</p>
  <p id="elem">Hello CSS</p>
  <p class="first-elem js-first-elem">Hello HTML</p>
  <p title="HELLO!">Hello JS</p>
</div>
`;

let p = document.querySelectorAll('p');
let d = document.getElementById('elem');
d.classList.add('blue', 'bg-red');
d.classList.remove('bg-red');

console.log(p)
console.log(d)
console.log(d.classList.contains('blue'), d.classList.contains('bg-red'))
d.style.color = 'tomato';
d.style.border = '5px solid blue';


// querySelector
// Отримати посилання на кожен елемент р з div.wrapper по черзі, використовуючи різні селектори.

// querySelectorAll
// Отримати посилання на всі елементи 'р' за селектором тега.
// Перебрати їх та вивести в консоль.

// getElementById
// Отримати посилання елемент c id "elem".

// classList
// Даний елемент # elem.
// Отримати посилання на нього.
// Додайте йому класи 'blue' та 'bg-red'.
// Видаліть у нього клас bg-red
// Перевірте наявність у нього класу 'blue' та 'bg-red'

// style
// Даний елемент # elem.
// Задайте йому колір кольору tomato
// Додайте йому чорну межу шириною 5рх 