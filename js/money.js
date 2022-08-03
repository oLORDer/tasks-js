const form = document.querySelector('.form');
const appusernb = document.querySelector('.appusernb');
const bankusernb = document.querySelector('.bankusernb');
const appkursusa = document.querySelector('.appkursusa');
const bankkursusa = document.querySelector('.bankkursusa');
const appget = document.querySelector('.appget');
const bankget = document.querySelector('.bankget');
let appuakurs = 39.5;

form.addEventListener('input', countCurrensyCourse);

function countCurrensyCourse(e) {
  let appSummOfUsd = appusernb.value / appkursusa.value;
  let bankSummOfUsd = bankusernb.value * bankkursusa.value;
  appget.textContent =
    'usd: ' +
    appSummOfUsd.toFixed(2) +
    ' ua: ' +
    Math.floor(appSummOfUsd * appuakurs);
  bankget.textContent =
    'ua: ' +
    bankSummOfUsd.toFixed(2) +
    ' diff: ' +
    (appSummOfUsd * appuakurs - bankSummOfUsd).toFixed();
  console.log();
}
