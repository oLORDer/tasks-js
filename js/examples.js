const react = document.querySelector('.react');
const list = document.querySelector('.list');
const body = document.querySelector('body');

list.addEventListener('click', onClick);
body.addEventListener('click', onBody);

function onBody(e) {
  if (body.style.backgroundColor === 'red') {
    body.style.backgroundColor = 'purple';
    return;
  }
  body.style.backgroundColor = 'red';
  console.log('body');
}

function onClick(e) {
  if (e.target.className !== 'react') {
    return;
  }
  let re = [...e.path];
  console.log(re);

  //   console.log(this);
}
