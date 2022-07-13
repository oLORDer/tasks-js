const cars = [
    {
        make: "Honda",
        model: "CR-V",
        type: "suv",
        amount: 14,
        price: 24045,
        onSale: true,
    },
    {
        make: "Honda",
        model: "Accord",
        type: "sedan",
        amount: 2,
        price: 22455,
        onSale: true,
    },
    {
        make: "Mazda",
        model: "Mazda 6",
        type: "sedan",
        amount: 8,
        price: 24195,
        onSale: false,
    },
    {
        make: "Mazda",
        model: "CX-9",
        type: "suv",
        amount: 7,
        price: 31520,
        onSale: true,
    },
    {
        make: "Toyota",
        model: "4Runner",
        type: "suv",
        amount: 19,
        price: 34210,
        onSale: false,
    },
    {
        make: "Toyota",
        model: "Sequoia",
        type: "suv",
        amount: 16,
        price: 45560,
        onSale: false,
    },
    {
        make: "Toyota",
        model: "Tacoma",
        type: "truck",
        amount: 4,
        price: 24320,
        onSale: true,
    },
    {
        make: "Ford",
        model: "F-150",
        type: "truck",
        amount: 11,
        price: 27110,
        onSale: true,
    },
    {
        make: "Ford",
        model: "Fusion",
        type: "sedan",
        amount: 13,
        price: 22120,
        onSale: true,
    },
    {
        make: "Ford",
        model: "Explorer",
        type: "suv",
        amount: 6,
        price: 31660,
        onSale: false,
    },
];

// 1. Написати ф-ю, яка повертає масив автомобілів з описом певного виробника, та сортує результат в алфавітному
// порядку по назві моделі.
// console.log(getSortModel(cars, 'Ford'));

// 2. Написати ф-ю, яка повертає масив автомобілів у певній ціновій категорії
// console.log(filterByPrice(cars, 20000, 24000));

// 3. Написати ф-ю getCarsProducer(cars), яка повертає масив всіх виробників для представлених авто, відсортованих
// за алфавінтим порядком
console.log(getCarsProducer(cars));

function getSortModel(arr, model) {
    return arr.filter(el => el.make === model).sort((a, b) => a.model.localeCompare(b.model));
}

function filterByPrice(cars, a, b) {
    return cars.filter(el => el.price >= a && el.price <= b);
}

function getCarsProducer(cars) {
    return cars.map(el => el.make).filter((el, i, arr) => arr.indexOf(el) === i);
}