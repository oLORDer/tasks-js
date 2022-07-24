// 2. Создать класс Самолет (Airplane) с полями:
// manufacturer (изготовитель)
// year (год выпуска)
// length (длина)
// weight (вес)
// fuel (количество топлива в баке)

// Для всех полей должны быть реализованы сеттеры, а для поля fuel еще и геттер.

// Создать конструктор в классе Самолет, принимающий в качестве аргументов значения четырех полей класса (значение поля “количество топлива в баке” установить равным 0). В конструкторе для передачи полям значений использовать ключевое слово this. Помимо этого, в классе необходимо реализовать метод info(), который выводит сообщение в следующем формате:
// “Изготовитель: … , год выпуска: … , длина: ..., вес: ..., количество топлива в баке: …”

// Также, необходимо реализовать метод fillUp(int n), который в качестве аргумента принимает число и дозаправляет топливный бак самолета на это значение.
// Создать новый объект класса Самолет с произвольными данными.
// Изменить год выпуска и длину с помощью сеттеров, вызвать метод fillUp(int n) два раза, передав разные значения. Вызвать метод info().

class Airplane {
  fuel = 0;
  constructor({ manufacturer, year, length, weight }) {
    this.manufacturer = manufacturer;
    this.year = year;
    this.length = length;
    this.weight = weight;
  }

  info() {
    console.log(
      `Изготовитель: ${this.manufacturer} , год выпуска: ${this.year} , длина: ${this.length}, вес: ${this.weight}, количество топлива в баке: ${this.fuel}`
    );
  }
  fillUp(ar) {
    this.fuel += ar;
  }
}
// let res = prompt('year ?');

function count(distance, fuelUse) {
  return (fuelUse / 100) * distance;
}

// let distance = prompt('distance?');
// let fuelUse = prompt('fuelUse?');

console.log(count(distance, fuelUse));

const re = new Airplane({
  manufacturer: 'brazil',
  year: 2020,
  length: 11 + ' metres',
  weight: 5 + ' ton',
});

re.info();
re.fillUp(10);
re.info();
re.fillUp(20);
re.info();

// console.log(re.hasOwnProperty(fuel));
