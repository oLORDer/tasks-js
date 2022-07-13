// Напишіть функцію leaveUnique(arr), яка повертає масив, що містить лише унікальні елементи arr (Вирішити через reduce)

const notUniqueNumbers = leaveUnique([1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 5]);

function leaveUnique(arr) {
    return arr.reduce((acc, el, i, ar) => {
        ar.indexOf(el) === i ? acc.push(el) : false;
        
        return acc;
    }, [])
}

console.log(notUniqueNumbers);