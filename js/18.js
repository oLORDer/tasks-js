// Даний масив із числами. Отримайте суму квадратів його елементів, але тільки тих квадратів, які перевищують 40.

let arr = [5, 6, 7, 8, 9];

function findQ(arr) {
    return arr.filter(el => el * el > 40);
}

console.log(findQ(arr));