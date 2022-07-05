// Використовуючи конструкцію if..else, напишіть код, який перевіряє, чи вистачає користувачу грошей на таксі :)
// Якщо так, показати 'Let`s go!', якщо ні 'Not enough'.
// const taxiPrice = 100;

const taxiPrice = 100;

function isEnoughtMoney(money) {
    if(money >= taxiPrice) {
        console.log('Let`s go!');
    } else {
        console.log('Not enough');
    }
}

isEnoughtMoney(prompt('your money?'));