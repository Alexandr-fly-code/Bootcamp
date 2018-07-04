// // Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// // вказує суму і на основі курса виводиться готова сума.
// // UAH, EUR, USD
// // 1)Запит яку валюту має
// // 2)Запит в яку валюту хоче перевести
// // 3)Запит яка сума для конвертації
// // 4) В замиканні зберегти 6 курсів валют
// // 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// // 6) Перетворити введену валюту до єдиного формату
// // 7) Перевірка на ціле і додатнє число.
// //8 ) alert вивести суму яку він отримає.
//
//
// const currency = prompt(`Какую валюту вы имеете?`).toLowerCase();
// const conversionCurrency = prompt(`В какую переводить?`).toLowerCase();
// const currentСash = +prompt(`Введите сумму`);
// console.log(currentСash);
// console.log(currency);
// console.log(conversionCurrency);
// const currencyUAH = 'uah';
// const currencyEUR = 'eur';
// const currencyUSD = 'usd';
//
// let result = 0;
//
// function exchangeRates (){
//     const USD = 26.3733945;
//     const EUR = 30.8661023;
//
//     function calculateUserMoney() {
//         if (Number.isInteger(currentСash) && currentСash > 0) {
//
//             if (currency === currencyUAH) {
//                 if (conversionCurrency === currencyUSD) {
//                     result = currentСash / USD;
//                     return alert(`${result.toFixed()} y.e`);
//
//                 } else if (conversionCurrency === currencyEUR) {
//                     result = currentСash / EUR;
//                     return alert(`${result.toFixed()} y.e`);
//                 }
//             } else if (currency === currencyUSD) {
//                 if (conversionCurrency === currencyUAH) {
//                     result = currentСash * USD;
//                     return alert(`${result.toFixed()} y.e`);
//                 }
//             } else if (currency === currencyEUR) {
//                 if (conversionCurrency === currencyUAH) {
//                     result = currentСash * EUR;
//                     return alert(`${result.toFixed()} y.e`);
//                 }
//             }
//
//         } else {
//             return alert(`Введена некоректая сумма`);
//         }
//     }
//
//     return calculateUserMoney();
// }
//
//
// console.log(exchangeRates());
//
//


'use strict';
/*
Написати об'єкт tank який буде мати такі властивості і методи.
1) coordinate 10 координати Х
2)CoordinateY 10 координати по У
3) life 100 здоровя
4) ammunition 5  кількість патронів
5) engineStatus true статус двигуна
6) moveToX(x) рухається до точки х
6) moveToY(у) рухається до точки у
7) fireTo(x, y) стріляє в точку х, у
8) canFire() перевірка чи є патрони
9) checkHealth() перевірка чи є неповне здоров'я
10) heal(x) додає здоровя
11) checkEngine() перевірка статусу двигуна
12) repairEngine() починка двигуна
13) showCoordinate() показує координати танка
14)  name імя гравця
// 15) color */
// const tank = {
//     name: 'MisterX',
//     color: 'green',
//     coordinate_X: 10,
//     coordinate_Y: 10,
//     life: 100,
//     ammunition: 5,
//     engineStatus: true,
//     moveToX(coordinate_X) {
//         tank.checkEngine() ? tank.coordinate_X += coordinate_X : alert('Вам надо починить движок. Используйте функцию repairEngine()');
//     },
//     moveToY(coordinate_Y) {
//         tank.checkEngine() ? tank.coordinate_Y += coordinate_Y : alert('Вам надо починить движок. Используйте функцию repairEngine()');
//     },
//     fireTo(x, y) {
//         tank.canFire() ? tank.ammunition = tank.ammunition - 1 : alert('У, Вас, нету патронов');
//     },
//     //перевірка чи є патрони
//     canFire() {
//         return tank.ammunition > 0;
//     },
//     //перевірка чи є неповне здоров'я
//     checkHealth() {
//         return life < 100 && life > 0;
//     },
//     //додає здоровя
//     heal(lifePlus) {
//         tank.checkHealth() ? life = life + lifePlus : alert('У, Вас, здоровье на высоте!!!');
//     },
//     //перевірка статусу двигуна
//     checkEngine() {
//         return tank.engineStatus === true;
//     },
//     //починка двигуна
//     repairEngine() {
//         tank.checkEngine() !== true ? tank.checkEngine === true : alert('У, Вас, движок на высоте!!!');
//     },
//     //показує координати танка
//     showCoordinate() {
//         return `твои координаты Х:${tank.coordinate_X} , твои координаты Y:${tank.coordinate_Y} `;
//     },
// };
// console.log(tank.showCoordinate());

//
// class Tank {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//         this.cordinate_X = 10;
//         this.coordinate_Y = 10;
//         this.life = 100;
//         this.ammunition = 5;
//         this.engineStatus = true;
//     }
//
//     moveToX(coordinate_X) {
//         this.checkEngine() ? coordinate_X += coordinate_X : alert('Вам надо починить движок. Используйте функцию repairEngine()');
//     };
//
//     moveToY(coordinate_Y) {
//         this.checkEngine() ? coordinate_Y += coordinate_Y : alert('Вам надо починить движок. Используйте функцию repairEngine()');
//     };
//
//     fireTo(x, y) {
//         this.canFire() ? this.ammunition = this.ammunition - 1 : alert('У, Вас, нету патронов');
//     };
//     //перевірка чи є патрони
//     canFire() {
//         return this.ammunition > 0;
//     };
//
//     //перевірка чи є неповне здоров'я
//     checkHealth() {
//         return this.life < 100 && this.life > 0;
//     };
//     //додає здоровя
//     heal(lifePlus) {
//         this.checkHealth() ? this.life = this.life + lifePlus : alert('У, Вас, здоровье на высоте!!!');
//     };
//
//     //перевірка статусу двигуна
//     checkEngine() {
//         return this.engineStatus === true;
//     };
//
//     //починка двигуна
//     repairEngine() {
//         this.checkEngine() !== true ? this.checkEngine === true : alert('У, Вас, движок на высоте!!!');
//     };
//
//     //показує координати танка
//     showCoordinate() {
//         return `твои координаты Х:${this.coordinate_X} , твои координаты Y:${this.coordinate_Y} `;
//     };
//
//
//
// }
//
// const tanks = new Tank('t34', 'red');
//
// console.log(tanks);
//
// tanks.moveToX(40);
// tanks.moveToX(50);
// tanks.moveToY(20);
// tanks.moveToY(70);
// tanks.moveToY(40);
//
// console.log(tanks);

//
// tanks.heal(100);
// console.log(tanks);


// class Tank {
//     constructor(name, color, startX, startY) {
//         this.coordinateX = startX;
//         this.coordinateY = startY;
//         this.life = 100;
//         this.ammunition = 5;
//         this.engineStatus = true;
//         this.name = name;
//         this.color = color;
//     }
//     moveToXY(x,y){
//         this.life>0?(this.coordinateX += x, this.coordinateY += y):console.log('You are die');
//     }
//     fireTo (x, y){
//         this.canFire() ? (this.ammunition -= 1, console.log(`firing to ${x}:${y}`)) : alert('You should reload');
//     }
//     canFire(){
//         return this.life > 0 && this.ammunition > 0;
//     }
//     checkHealth(){
//         return this.life > 0 && this.life < 100
//     }
//     heal(){
//         this.checkHealth() ? this.life += x : console.log('не можливо')
//     }
//     checkEngine(){
//         this.engineStatus === true ? alert('Engine is work') : alert('Engine doesn\'t work')
//     }
//     repairEngine(){
//         this.engineStatus === false ? this.engineStatus = true : null
//     }
//     showCoordinate(){
//         console.log(`x: ${this.coordinateX}, y: ${this.coordinateY}`)
//     }
// }
//
//
// const tanks = new Tank('Poly', 'red', 40, 50);
//
// console.log(tanks);
//
//
// class User {
//     constructor(name, surname) {
//         // this.name = name;
//         // this.surname = surname;
//         // private
//         this._name = name;
//         this._surname = surname;
//     }
//
//     getFullName() {
//         return `${this._name} ${this._surname}.`
//     }
//
//     // getFullName() {
//     //     return `${this.name} ${this.surname}.`
//     // }
//
//     // // getter
//     //
//     get name() {
//         return this._name;
//     }
//     //
//     // //
//     // // get surname() {
//     // //     return this._surname;
//     // // }
//     // // // setter
//     // //
//     set age(age) {
//         this._age = age;
//     }
//
//     get age() {
//         return this._age;
//     }
//     //
//     // set setName(name) {
//     //     this._name = name;
//     // }
//     //
//     // //
//     // get age() {
//     //     return this._age;
//     // }
// }


// 1)Створити клас Worker що буде мати властивості name, surname, rate, days
// 2) Додати метод getSalary(),
// 3) Створити 2 робітника і знайти їх зарплати
// 4) Модифікувати клас так щою всі 4 властивості з пункта №1 були приватними і написати для їх читання гетери
// 5) Для властивостей rate, days додати методи сетери

//
// class Worker {
//     constructor(name, surname, rate, days){
//         this._name = name;
//         this._rate = rate;
//         this._surname = surname;
//         this._days = days;
//     }
//     set rate(rate){
//         this._rate = rate;
//     }
//     set days(days){
//         this._days = days;
//     }
//     get name(){
//         return this._name;
//     }
//     get rate (){
//         return this._rate;
//     }
//     get surname (){
//         return this._surname;
//     }
//     get days (){
//         return this._days;
//     }
//
//     getSalary (){
//         return this._days * this._rate;
//     }
//
// }
//
// const jobs = new Worker('Alex', 'Petrov', 100, 20);
// jobs.rate = 150;
//
//
// console.log(jobs.getSalary());


// 1) Створити клас User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити клас Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран

class User {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    getFullName() {
        // console.log(`Имя ${this._name} Фамилия ${this._surname}`);
        return `Имя ${this._name} Фамилия ${this._surname}`
    }

}

class Student extends User {
    constructor(name, surname, yearIn) {
        super(name, surname);
        this._yearIn = yearIn;
    }

    getCourse() {
        return 2018 - this._yearIn;
    }

    getFullInfo() {
        return `${super.getFullName()} и ${this.getCourse()}`
    }
}


const user = new User('Alex', 'Ivanov');

user.getFullName();

const student = new Student('Alexndr', 'Vasil', 1997);
// console.log(student);
// student.getCourse();
console.log(student.getFullInfo());
