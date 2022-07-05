// Запитати в користувача його ім'я, прізвище та вік за допомогою prompt
// Записати всі відповіді на змінні і вивести в консоль:
// User's full name is [name] [lastName]. He is [age] years old.

const userName = prompt('what is your name?');
const userSurName = prompt('what is your surname?');
const userAge = prompt('what is your age?');

console.log(`User's full name is ${userName} ${userSurName}. He is ${userAge} years old.`);