// Дано елементи з класом text.
// Отримайте посилання на всі ці елементи.
// Додайте кожному елементу на кінець назву його тега в нижньому регістрі.

document.querySelector('body').innerHTML = `
<div class="text">My tag is -></div>
<h1 class="text">My tag is -></h1>
<p class="text">My tag is -></p>
<span class="text">My tag is -></span>
<h4 class="text">My tag is -></h4>`;

let t = document.querySelectorAll('.text');

t.forEach(el => el.innerHTML = el.textContent + ' ' + el.nodeName.toLocaleLowerCase())

console.log()