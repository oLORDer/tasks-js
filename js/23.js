const listNames = [
  'Сапсай Иван',
  'Буракшаева Юлия',
  'Богословский Артем',
  'Мельникова Ксения',
  'Иванов Сергей',
  'Фурсова Елизавета',
  'Самбикина Юлия',
];

const workPositions = [
  {
    id: 1,
    department: 'Отдел продаж',
    position: 'Торговый представитель',
    salary: 10000,
  },
  {
    id: 2,
    department: 'Отдел аналитики',
    position: 'Аналитик систем',
    salary: 50000,
  },
  {
    id: 3,
    department: 'Отдел рекламы',
    position: 'Маркетолог',
    salary: 25000,
  },
  {
    id: 4,
    department: 'Отдел продаж',
    position: 'Супервайзер',
    salary: 18000,
  },
  {
    id: 5,
    department: 'Отдел рекламы',
    position: 'Мерчендайзер',
    salary: 10000,
  },
  {
    id: 6,
    department: 'Отдел логистики',
    position: 'Водитель-экспедитор',
    salary: 15000,
  },
  {
    id: 7,
    department: 'Бухгалтерия',
    position: 'Главный бухгалтер',
    salary: 20000,
  },
];

// 1. написать функцию, separateName(fullName), которая принимает строку "Фамилия Имя" и возвращает объект
// в котором имя и фамилия являются отдельными свойствами: {firstName: "Имя", lastName: "Фамилия"}

// 2. Написать функцию createEmployesList(employes), которая принимает список сотрудников "Фамилия Имя" и
// записывает их в массив объектов, который описывает каждого сотрудника, добавляя
// ему уникальный id типа (1, 2, 3, и т.д.)

// 3. Написать функцию getEmployeeData(id), которая по id выбирает сотрудника из масива сотрудников
// и возвращает объект с данными сотрудника дополнеными информацией о нем из соответствующего ему объекта
// с рабочим отделом, должностью и зарплатой на этой должности в масиве workPosition - типа:
// {
//   id: 1,
//   firstName: "Иван",
//   lastName: "Сапсай",
//   department: "Отдел продаж",
//   position: "Торговый представитель",
//   salary: 10000
// }

// В першому завданні функція є “допоміжною” (для наступних задач) приймає строку, тобто елемент вихідного масиву. Повинна повернути об‘єкт з двома полями firstName та lastName. Використовуємо диструктуризацію масивів.
// console.log(separateName(listNames[0])); // {firstName: 'Иван', lastName: 'Сапсай'}

function separateName(fullName) {
  let indexOfSpace = fullName.indexOf(' ');
  return {
    firstName: fullName.split('').splice(0, indexOfSpace).join(''),
    lastName: fullName.split('').splice(indexOfSpace).join(''),
  };
}

let res;
function createEmployesList(employes) {
  let id = 1;
  res = employes.map((el) => {
    let indexOfSpace = el.indexOf(' ');
    return {
      id: id++,
      lastName: el.split('').splice(0, indexOfSpace).join(''),
      firstName: el
        .split('')
        .splice(indexOfSpace + 1)
        .join(''),
    };
  });

  return res;
}
let fullInfo;
function getEmployeeData(id) {
  let ind = workPositions.findIndex((el) => el.id === id);
  let indx = res.findIndex((el) => el.id === id);
  fullInfo = workPositions[ind];
  fullInfo.firstName = res[indx].firstName;
  fullInfo.lastName = res[indx].lastName;
}

createEmployesList(listNames);
getEmployeeData(1);
console.log(fullInfo);
