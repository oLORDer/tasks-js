// Написати програму, яка отримає від користувача число (кількість хвилин) і виведе на екран рядок у форматі годин
// та хвилин.

function getTime(time) {
    return `hour: ${(time / 60).toFixed(0)} min: ${time % 60}`;
}

console.log(getTime(prompt('time?')));
