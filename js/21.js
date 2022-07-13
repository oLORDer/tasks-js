// Напиши клас Client, який створює об'єкт із властивостями login та email.
//    login повинен бути суспільною властивістю, а email приватним.
//    Доступ до email зроби через геттер та сетер.
//    Перед тим як змінити імейл, у сеттері потрібно викликати приватний метод, який валідуватиме імейл (наявність собачки та крапки).
//    Якщо імейл невалідний – нічого не робити і вивести в консоль 'Email is not valid!'


class Client {
    #email;
    constructor({login, email}) {
        this.login = login;
        this.#email = email;
    }
    
    get email() {
        return this.#email;
    }

    set email(newEmail) {
        if(newEmail.includes('@') && newEmail.includes('.')) {
            this.#email = newEmail;
        } else {
            console.log('Email is not valid!');
        }
    }
}

const mango = new Client({
  login: 'Mango',
  email: 'mango@dog.woof',
});

// console.log('mango', mango);
mango.email = 'jutsu@.';
console.log(mango.email);