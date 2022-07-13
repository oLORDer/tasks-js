// Маємо масив користувачів
// 1) Написати функцію getEmailsByGender(users, gender), яка отримуватиме масив користувачів та стать, і повертатиме масив
// імейлів усіх користувачів даної статі.
// 2) Написати функцію addNewUser(users, newUser), яка отримуватиме масив користувачів та об'єкт з новим користувачем.
// Функція повинна додати об'єкт у масив та повернути новий масив. Але якщо користувач з даним імейлом вже існує,
// додаватися не повинно. В такому випадку можна вивести в консоль повідомлення:
// `User with email "${email}" already exists` і повернути масив без змін.
// 3) Написати функцію deleteUser(users, userEmail), яка отримуватиме масив користувачів та email користувача, якого
// потрібно видалити. Функція повинна виконати видалення та повернути новий масив. Але якщо користувача з даним імейлом не
//  існує, потрібно вивести в консоль повідомлення:  `There is no user with email "${email}"` і повернути масив без змін.
// 4) Написати функцію editUser(users, userEmail, newName), яка отримуватиме масив користувачів, email користувача, ім'я
// якого потрібно змінити та нове ім'я. Функція повинна змінити та повернути новий масив. Але якщо користувача з даним
// імейлом не існує, потрібно вивести в консоль повідомлення: `There is no user with email "${email}"` і повернути масив
// без змін.

const users = [
  {
    first_name: 'Peterus',
    last_name: 'Verlander',
    email: 'pverlander0@bloomberg.com',
    gender: 'male',
  },
  {
    first_name: 'Charis',
    last_name: 'Tennant',
    email: 'ctennant1@t-online.de',
    gender: 'female',
  },
  {
    first_name: 'Hortense',
    last_name: 'Lammerding',
    email: 'hlammerding2@blog.com',
    gender: 'female',
  },
  {
    first_name: 'Anatollo',
    last_name: 'Ricards',
    email: 'aricards3@washington.edu',
    gender: 'male',
  },
];

// 1)
function getEmailsByGender(users, gender) {
  let arr = [];
  users.map((el) => (el.gender === gender ? arr.push(el.email) : false));
  return arr;
}
const femaleEmails = getEmailsByGender(users, 'female');
// console.log(femaleEmails); // ['ctennant1@t-online.de', 'hlammerding2@blog.com']

// 2)

// function addNewUser(users, newUser) {
//   let res = users.find((el) => {
//     return el.email == newUser.email;
//   });

//   if (res === undefined) {
//     return (newArr = [...users, newUser]);
//   } else {
//     return `User with email "${newUser.email}" already exists`;
//   }
// }

// const newUser = {
//   first_name: 'Oralie',
//   last_name: 'Langshaw',
//   email: 'olangshaw4@google.pl',
//   gender: 'female',
// };
// const updatedUsers = addNewUser(users, newUser);
// // console.log(updatedUsers); // 5 users

// // // //
// const newUser2 = {
//   first_name: 'Oralie',
//   last_name: 'Langshaw',
//   email: 'ctennant1@t-online.de',
//   gender: 'female',
// };
// const updatedUsers2 = addNewUser(users, newUser2);
// console.log(updatedUsers2); // User with email "ctennant1@t-online.de" already exists

// 3)
// function deleteUser(users, userEmail) {
//   let ind = users.findIndex(el => el.email === userEmail);
//   if(ind === -1) {
//     return `There is no user with email "${userEmail}"`;
//   }
//   users.splice(ind, 1);
//   return users;
// }
// const updatedUsers = deleteUser(users, 'pverlander0@bloomberg.com');
// console.log(updatedUsers); // 3 users

// const updatedUsers2 = deleteUser(users, 'pverlander0@bloomberg.com');
// console.log(updatedUsers2); // There is no user with email "pverlander0@bloomberg.com"

// 4)
function editUser(users, userEmail, newName) {
  let isFind = false;
  users.map(el => {
    if (el.email === userEmail) {
      el.first_name = newName;
      isFind = true;
    }
  })
  if (!isFind) {
    return `There is no user with email "${userEmail}"`;
  }
  
  return users;
}
const updatedUsers = editUser(users, 'aricards3@washington.edu', 'Anatoliy')
console.log(updatedUsers); // last user has name Anatoliy
const updatedUsers2 = editUser(users, 'fakeEmail', 'Marlene')
console.log(updatedUsers2); // There is no user with email "fakeEmail"
