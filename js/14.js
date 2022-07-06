// Написати ф-ю, яка приймає 2 параметри (об'єкт замовлення та об'єкт з цінами товару)
// Ця ф-я повинна повернути ціну замовлення
// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 }
// const orderA = { apple: 5, cheese: 1, bread: 3 }
// const orderB = { orange: 10, pork: 2, bread: 1 }

const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 };
const orderA = { apple: 5, cheese: 1, bread: 3 };
const orderB = { orange: 10, pork: 2, bread: 1 };

function returnPrice(price, order) {
  let val = 0;
  for (let key in order) {
    for (let pk in price) {
      if (key === pk) {
        val += order[key] * price[pk];
      }
    }
  }
  return val;
}

console.log(returnPrice(productsPrice, orderA));
