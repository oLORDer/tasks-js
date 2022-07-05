// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: 'What is your budget for the trip?'.
// Якщо більше або дорівнює 20000, показати: 'Welcome to Turkey',
// якщо більше або 15000, то показати: 'Welcome to Egypt',
// якщо більше або 10000, то показати: 'Welcome to Bulgaria',
// якщо більше або дорівнює 5000, то показати: 'Welcome to Truskavets',
// інакше – відобразити: 'Go to work'

(function () {
    const money = prompt('What is your budget for the trip?');

    if (money >= 20000) {
        console.log('Welcome to Turkey');
    } else if (money >= 15000) {
        console.log('Welcome to Egypt');
    } else if (money >= 10000) {
        console.log('Welcome to Bulgaria');
    } else if (money >= 5000) {
        console.log('Welcome to Truskavets');
    } else {
        console.log('Go to work');
    }
})()