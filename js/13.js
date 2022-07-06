// Написати ф-ю ObjectEmpty, яка перевіряє об'єкт порожній чи ні. Якщо об'єкт порожній, повернути true, інакше false
// isObjectEmpty({}) // true
// console.log(isObjectEmpty({name: 'user', age: 21})); // false

function isObjectEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}

console.log(isObjectEmpty({})); // true
