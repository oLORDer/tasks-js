// Напишіть програму, яка буде находити сумму, різницю, множення, частку двох чисел.
// Користувач вводить 2 числа, потім вводить знак операції і отримує результат у форматі
// "Сумма чисел a i b дорівнює result" (шаблон для кожного відповіді)

(function () {
  const firstNumber = Number.parseFloat(prompt('Enter first number'));
  const secondNumber = Number.parseFloat(prompt('Enter second number'));
  const operation = prompt('Enter your operation');
  let operator;
  let result;

  if (operation === '+') {
    result = firstNumber + secondNumber;
    operator = 'плюс';
  }
  if (operation === '-') {
    result = firstNumber - secondNumber;
    operator = 'різницi';
  }
  if (operation === '/') {
    result = firstNumber / secondNumber;
    operator = 'дiлення';
  }
  if (operation === '*') {
    result = firstNumber * secondNumber;
    operator = 'множення';
  }

  console.log(`Результат ${operator} дорiвнюе ${result}`);
})();
