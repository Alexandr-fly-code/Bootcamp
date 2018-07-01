// function Test({name, age, numbers, low = 'medium'}) {
//     this.name = name;
//     this.age = age;
//     this.numbers = numbers;
//     this.low = low;
//
//     this.sum = function () {
//         return this.age + this.numbers;
//     }
// }
//
// const test = new Test({
//         name: 'Alexandr',
//         age: 30,
//         numbers: 10,
//         low: 'hight',
//         first: `not first`,
//     }
// );
//
// console.log(test);
// console.log(test.sum());


// Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// вказує суму і на основі курса виводиться готова сума.
// UAH, EUR, USD
// 1)Запит яку валюту має
// 2)Запит в яку валюту хоче перевести
// 3)Запит яка сума для конвертації
// 4) В замиканні зберегти 6 курсів валют
// 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// 6) Перетворити введену валюту до єдиного формату