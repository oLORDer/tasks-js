// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників та повертає ім'я самого
// продуктивного (який виконав найбільше завдань). Співробітники і кількість виконаних завдань містяться як властивості
// об'єкта у форматі "ім'я": "кількість задач".
// console.log(findBestEmployee({ann: 29, david: 35, helen: 1, lorence: 99,})); // lorence
// console.log(findBestEmployee({poly: 12, mango: 17, ajax: 4,})); // mango
// console.log(findBestEmployee({lux: 147, david: 21, kiwi: 19, chelsy: 38,})); // lux

function findBestEmployee(employees) {
    let bestVal = 0;
    let bestName;

    for (let key in employees) {
        if (bestVal < employees[key]) {
            bestVal = employees[key];
            bestName = key;
        }
    }
    return bestName;
}


console.log(findBestEmployee({ann: 29, david: 35, helen: 1, lorence: 99,})); // lorence
console.log(findBestEmployee({poly: 12, mango: 17, ajax: 4,})); // mango
console.log(findBestEmployee({lux: 147, david: 21, kiwi: 19, chelsy: 38,})); // lux