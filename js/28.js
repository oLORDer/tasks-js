// Є масив користувачів, вивести на сторінку картку кожного користувача з ім'ям, віком і кольором очей.
// Використовувати шаблонні рядки та insertAdjacentHTML / innerHTML
// Очистити список
// <li>
//   <h2>Moore Hensley</h2>
//   <p>Age: 37</p>
//   <span style="background-color: колір очей користувача">Eye color: </span>
// </li>
const inventors = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    passed: 1955,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    passed: 1727,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    passed: 1642,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    passed: 1934,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    passed: 1630,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    passed: 1543,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    passed: 1947,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    passed: 1979,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    passed: 1852,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    passed: 1905,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    passed: 1968,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    passed: 1909,
  },
];

const body = document.querySelector("body");

const res = inventors.map(
  ({ name, surname, born, passed }) => `<li>
   <p>name: ${name}</p>
   <p>surname: ${surname}</p>
   <p>Age: ${passed - born}</p>
 </li>`
);

body.insertAdjacentHTML("beforeend", `<ul>${res.join('')}</ul>`);
