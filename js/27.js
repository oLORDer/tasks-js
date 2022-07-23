// Даний ol. Вставте нову li з текстом 'Soft Skills' в кінець списку.
// Вставте перед списком заголовок із текстом 'Plan:'. <ol>
document.querySelector('body').innerHTML = `
<ol>
<li>Html</li>
<li>Css</li>
<li>JS</li>
<li>React</li>
<li>Node</li>
</ol>`;

let ol = document.querySelector('ol');
ol.insertAdjacentHTML('beforeend', `<li>Soft Skills</li>`)
ol.insertAdjacentHTML('beforeBegin', `Plan:`)
console.log(ol.children[5].textContent)