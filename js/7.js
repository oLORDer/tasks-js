// Напишіть код, який запитуватиме логін за допомогою prompt і логуватиме результат у консоль браузера.
// Якщо відвідувач вводить Admin, то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc – вивести рядок "Cancelled"
// Інакше вивести рядок "I don't know you"
// Пароль перевіряти так:
// Якщо введено пароль "I am the boss", вивести рядок "Hello!"
// Інакше виводити рядок "Wrong password"

function askUserInfo(arg) {
    if(arg === 'Admin'){
        let ans = prompt('your password?');
        return ans = "I am the boss" ? "Hello!" : "Wrong password";
    } else if (arg == undefined || arg == ' ') {
        return "Cancelled";
    } else {
        return "I don't know you";
    }

}
console.log(askUserInfo(prompt('your login?')));
