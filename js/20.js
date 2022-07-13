// Користувач
// Напиши клас а для створення користувача з наступними властивостями:
// name - ім'я, рядок
// age - вік, число
// postsCount - кількість постів, число

// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який повертає рядок:
//     User ${ім'я} is ${вік} years old and has ${у постів} posts.

class User {
    constructor({name, age, postsCount}) {
        this.name = name;
        this.age = age;
        this.postsCount = postsCount;
    }

    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.postsCount} posts.`;
    }
}

const mangoData = {
  name: 'Mango',
  age: 45,
  postsCount: 20,
};

const mango = new User(mangoData);

console.log(mango);
console.log(mango.getInfo()); // User Mango is 45 years old and has 20 posts
