// Написати ф-ю capitalize, яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися
// з великої літери.
// capitalize('the quick brown fox') // 'The Quick Brown Fox'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

function capitalize(str) {
  let arr = str.split(' ');
  return arr
    .reduce((acc, el) => {
      acc.push(el.charAt(0).toUpperCase() + el.slice(1));
      return acc;
    }, [])
    .join(' ');
}

console.log(capitalize('the quick brown fox'));
