// Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// вказує суму і на основі курса виводиться готова сума.
// UAH, EUR, USD
// 1)Запит яку валюту має
// 2)Запит в яку валюту хоче перевести
// 3)Запит яка сума для конвертації
// 4) В замиканні зберегти 6 курсів валют
// 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// 6) Перетворити введену валюту до єдиного формату
// 7) Перевірка на ціле і додатнє число.
//8 ) alert вивести суму яку він отримає.


const currency = prompt(`Какую валюту вы имеете?`).toLowerCase();
const conversionCurrency = prompt(`В какую переводить?`).toLowerCase();
const currentСash = +prompt(`Введите сумму`);
console.log(currentСash);
console.log(currency);
console.log(conversionCurrency);
const currencyUAH = 'uah';
const currencyEUR = 'eur';
const currencyUSD = 'usd';

let result = 0;

function exchangeRates (){
    const USD = 26.3733945;
    const EUR = 30.8661023;

    function calculateUserMoney() {
        if (Number.isInteger(currentСash) && currentСash > 0) {

            if (currency === currencyUAH) {
                if (conversionCurrency === currencyUSD) {
                    result = currentСash / USD;
                    return alert(`${result.toFixed()} y.e`);

                } else if (conversionCurrency === currencyEUR) {
                    result = currentСash / EUR;
                    return alert(`${result.toFixed()} y.e`);
                }
            } else if (currency === currencyUSD) {
                if (conversionCurrency === currencyUAH) {
                    result = currentСash * USD;
                    return alert(`${result.toFixed()} y.e`);
                }
            } else if (currency === currencyEUR) {
                if (conversionCurrency === currencyUAH) {
                    result = currentСash * EUR;
                    return alert(`${result.toFixed()} y.e`);
                }
            }

        } else {
            return alert(`Введена некоректая сумма`);
        }
    }

    return calculateUserMoney();
}


console.log(exchangeRates());


