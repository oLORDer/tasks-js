// Напишіть функцію logItems(array), яка отримує масив та використовує цикл for, який для кожного масиву виводитиме
// у консоль повідомлення у форматі [номер елемента] - [значення елемента].
// Нумерація починається з 1. Наприклад, для першого масиву елементів
// ['Mango', 'Poly', 'Ajax'] з індексом 0 виведе '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const arr = require("jshint/data/non-ascii-identifier-start");

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);



function logItems(array) {
    for(let i = 0; i < array.length; i += 1) {
        console.log(`${i + 1}: ${array[i]}`)
    }
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);