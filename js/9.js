// Написати ф-ю countVowels, яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з
// голосними в англ алфавіті
// countVowels('the quick brown fox') // 5

function comeBackLetters(str) {
    let c = 0;
    for(let i of str.split('')) {
        if('aeiouAEIOU'.includes(i)) {
            c += 1;
        }
    }
    return c;
}

console.log(comeBackLetters('the quick brown fox'));