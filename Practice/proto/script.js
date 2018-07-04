'use strict'

// // // // // let a = {
// // // // //     age: 25,
// // // // //     name: 'Jane',
// // // // // };
// // // // // console.log(a);
// // // // // let arr = [1,2,3,4,5];
// // // // // console.log(arr);
// // // // //
// // // // //
// // // // // let cat = {
// // // // //     name : 'Barsik',
// // // // //     age: 20,
// // // // //     yellow: true,
// // // // // }
// // // // //
// // // // // let dog = Object.create(cat);
// // // // // dog.name = 'Bars';
// // // // // console.log(dog);
// // // // //
// // // // // // let dog = Object.create(null)
// // // // // // dog.name = 'Bars';
// // // // // // console.log(dog);
// // // //
// // // //
// // // // const Hero = function(name, level) {
// // // //     this.name = name;
// // // //     this.level = level;
// // // // };
// // // //
// // // // Hero.prototype.greet = function() {
// // // //     console.log(`Hello, I'm ${this.name}`);
// // // // };
// // // //
// // // // //   const Alister = new Hero('Alister', 1);
// // // // // Alister.greet();
// // // //
// // // // //   /*
// // // // //     Warrior class, extends Hero
// // // // //   */
// // // // const Warrior = function(name, level, weapon) {
// // // // //     Hero.call(this, name, level);
// // // //
// // // //     this.weapon = weapon;
// // // // };
// // // //
// // // // Warrior.prototype = Object.create(Hero.prototype);
// // // // Warrior.prototype.constructor = Warrior;
// // // //
// // // // Warrior.prototype.attack = function() {
// // // //     console.log(`${this.name} attacks with an ${this.weapon}.`);
// // // // };
// // // //
// // // // let alister = new Warrior('Alister', 1, 'sword');
// // // // console.log(alister);
// // //
// // // //
// // // // const Test = function (name, age) {
// // // //     this.name = name;
// // // //     this.age = age;
// // // // };
// // // //
// // // // Test.prototype.shoText = function () {
// // // //     console.log(`test log`);
// // // // };
// // // //
// // // //
// // // // const Test2 = function (name, age, years) {
// // // //     Test.call(this,name,age);
// // // //     this.years = years;
// // // // };
// // // //
// // // // Test2.prototype = Object.create(Test.prototype);
// // // // Test2.prototype.constructor = Test2;
// // // //
// // // // const testing = new Test('Alex', 25);
// // // // testing.shoText()
// // // // console.log(testing);
// // // //
// // // // const testing2 = new Test2('Mang', 30, 1997);
// // // // console.log(testing2);
// // //
// // //
// // // const Obj = function (object, just, name) {
// // //     this.object = object;
// // //     this.just = just;
// // //     this.name = name;
// // // };
// // //
// // //
// // // Obj.prototype.showName = function () {
// // //     console.log(this.name);
// // // };
// // //
// // //
// // // Obj.prototype.showJust = function () {
// // //     console.log(this.just);
// // // };
// // //
// // // const Obj2 = function (object, just, name, years) {
// // //     Obj.call(this, object, just, name);
// // //     this.years = years;
// // // };
// // //
// // // Obj2.prototype = Object.create(Obj.prototype);
// // // Obj2.prototype.constructor = Obj2;
// // //
// // //
// // // const testing = new Obj('10', 'just', 'Alex');
// // //
// // // console.log(testing);
// // //
// // // testing.showName();
// // //
// // // const testing2 = new Obj2(10, 'just', 'Misha', 1990);
// // //
// // // console.log(testing2);
// // //
// // // testing2.showName()
// // // testing2.showJust()
// //
// //
// //
// //
// //
// //
// // /*
// //   Сеть фастфудов предлагает несколько видов гамбургеров.
// //
// //   Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
// // 	- маленькая (+30 денег, +50 калорий)
// // 	- большая (+50 денег, +100 калорий)
// //
// //   Гамбургер может быть с одной из нескольких видов начинок (обязательно):
// // 	- сыром (+15 денег, +20 калорий)
// // 	- салатом (+20 денег, +5 калорий)
// // 	- мясом (+35 денег, +15 калорий)
// //
// //   Дополнительно, гамбургер можно:
// // 	- посыпать приправой (+10 денег, +0 калорий)
// // 	- полить соусом (+15 денег, +5 калорий)
// //   Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
// //   создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
// //   Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
// //   указанные методы, которые принимают и возвращают данные указанного типа.
// // */
// //
// // /**
// //  * Класс, объекты которого описывают параметры гамбургера.
// //  */
//
// const Hamburger = function (size, stuffing) {
//     this.size = size;
//     this.stuffing = stuffing;
//
// };
//
// Hamburger.prototype.SIZE_SMALL = 'SIZE_SMALL';
// Hamburger.prototype.SIZE_LARGE = 'SIZE_LARGE';
//
//
// Hamburger.prototype.SIZES = {
//     [Hamburger.prototype.SIZE_SMALL]: {
//         price: 30,
//         calories: 50,
//     },
// };
//
//
//
// //
// // Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
// // Hamburger.STUFFING_SALAD = ...
// // Hamburger.STUFFING_MEAT = ...
// //
// // Hamburger.STUFFINGS = {
// //     [Hamburger.STUFFING_CHEESE]: {
// //         price: 15,
// //         calories: 20,
// //     },
// // };
// //
// // Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
// // Hamburger.TOPPING_SAUCE = ...
// //
// // Hamburger.TOPPINGS = {
// //     [Hamburger.TOPPING_SPICE]: {
// //         price: 10,
// //         calories: 0,
// //     },
// // };
// Hamburger.prototype.TOPPING_SPICE = 'TOPPING_SPICE';
// // Hamburger.TOPPING_SAUCE = ...
// //
// Hamburger.prototype.TOPPINGS = {
//     [Hamburger.prototype.TOPPING_SPICE]: {
//         price: 10,
//         calories: 0,
//     },
// };
//
// Hamburger.prototype.addTopping = function (topping) {
//     this.topping = topping;
//     return this.topping = Hamburger.Hamburger.TOPPINGS;
// };
//
// Hamburger.prototype.removeTopping = function (topping) {
//
// };
//
// Hamburger.prototype.getToppings = function () {
//
// };
//
//
// Hamburger.prototype.calculatePrice = function (){
//
// }
// // const ham = new Hamburger('name', 10);
//
// // console.log(ham.SIZES.SIZE_SMALL);
//
// // class Hamburger {
// //     /**
// //      * @constructor
// //      * @param {String} size - Размер
// //      * @param {String} stuffing - Начинка
// //      */
// //     constructor(size, stuffing) {}
// //
// //     /**
// //      * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
// //      * @param {String} topping - Тип добавки
// //      */
// //     addTopping(topping) {}
// //
// //     /**
// //      * Убрать topping, при условии, что она ранее была добавлена
// //      * @param {String} topping - Тип добавки
// //      */
// //     removeTopping(topping) {}
// //
// //     /**
// //      * Получить список toppings
// //      * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
// //      *
// //      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
// //      */
// //     getToppings() {}
// //
// //     /**
// //      * Узнать размер гамбургера
// //      * @returns {String} - размер гамбургера
// //      *
// //      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
// //      */
// //     getSize() {}
// //
// //     /**
// //      * Узнать начинку гамбургера
// //      * @returns {String} - начинка гамбургера
// //      *
// //      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
// //      */
// //     getStuffing() {}
// //
// //     /**
// //      * Узнать цену гамбургера
// //      * @returns {Number} - Цена в деньгах
// //      *
// //      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
// //      */
// //     calculatePrice() {}
// //
// //     /**
// //      * Узнать калорийность
// //      * @returns {Number} - Калорийность в калориях
// //      *
// //      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
// //      */
// //     calculateCalories() {}
// // }
// //
// // /*
// //   Размеры, виды добавок и начинок объявите как статические поля класса.
// //   Добавьте отсутсвующие поля по аналогии с примером.
// // */
// // Hamburger.SIZE_SMALL = 'SIZE_SMALL';
// // Hamburger.SIZE_LARGE = ...
// //
// // Hamburger.SIZES = {
// //     [Hamburger.SIZE_SMALL]: {
// //         price: 30,
// //         calories: 50,
// //     },
// // };
// //
// // Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
// // Hamburger.STUFFING_SALAD = ...
// // Hamburger.STUFFING_MEAT = ...
// //
// // Hamburger.STUFFINGS = {
// //     [Hamburger.STUFFING_CHEESE]: {
// //         price: 15,
// //         calories: 20,
// //     },
// // };
// //
//
// //
// // /* Вот как может выглядеть использование этого класса */
// //
// // // Маленький гамбургер с начинкой из сыра
// const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// //
// // // Добавка из приправы
// hamburger.addTopping(Hamburger.TOPPING_SPICE);
// //
// // // Спросим сколько там калорий
// // console.log("Calories: ", hamburger.calculateCalories());
// //
// // // Сколько стоит?
// // console.log("Price: ", hamburger.calculatePrice());
// //
// // // Я тут передумал и решил добавить еще соус
// // hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// //
// // // А сколько теперь стоит?
// // console.log("Price with sauce: ", hamburger.calculatePrice());
// //
// // // Проверить, большой ли гамбургер?
// // console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// //
// // // Убрать добавку
// // hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// //
// // // Смотрим сколько добавок
// // console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1



/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount.

  В prototype функции-конструктора добавить метод getAccountInfo(),
  который выводит в консоль значения полей login, email и friendsCount.

  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/
//
// const Account = function (login, email, friendsCount) {
//     this.login = login;
//     this.email = email;
//     this.friendsCount = friendsCount;
// };
//
// Account.prototype.getAccountInfo = function () {
//     console.log(`login ${this.login}, email ${this.email}, friendCount ${this.friendsCount}`);
// };
// const Account2 = function(login, email, friendsCount, name){
//     Account.call(this, login, email, friendsCount);
//     this.name = name;
//     console.log(this.name);
// };
// Account2.prototype = Object.create(Account.prototype);
// Account2.prototype.constructor = Account2;
//
// const accaunts = new Account('Nix', 'nix@gmail.com', 10);
// console.log(accaunts);
//
// const accaunts2 = new Account2('Nix', 'nix@gmail.com', 10, 'Alex')
// accaunts2.getAccountInfo()
// console.log(accaunts2);
// accaunts.getAccountInfo();
// //
//
//
// class Account {
//     constructor (login, email, friendsCount){
//         this.login = login;
//         this.email = email;
//         this.friendsCount = friendsCount;
//     };
//     getAccountInfo (){
//         console.log(`login ${this.login}, email ${this.email}, friendCount ${this.friendsCount}`);
//     };
// }
//
// class Account2 extends Account {
//     constructor(login, email, friendsCount){
//     super(login, email, friendsCount);
//     }
// };
//
//
// const test = new Account('login', 'email', 'friendsCount');
// test.getAccountInfo();
// console.log(test);
//
// const test2 = new Account2('login', 'email', 'friendsCount');
// test2.getAccountInfo();
// console.log(test2);


/*
  Напишите функцию-конструктор StringBuilder.

  На вход она получает один параметр string - строку.

  Добавьте следующие методы в prototype функции-конструктора.

    - getValue() - выводит в консоль текущее значение поля value

    - append(str) - получает парметр str - строку и добавляет
      ее в конец значения поля value

    - prepend(str) - получает парметр str - строку и добавляет
      ее в начало значения поля value

    - pad(str) - получает парметр str - строку и добавляет
      ее в начало и в конец значения поля value
*/


// const StringBuilder = function (string) {
//     this.string = string;
// };
//
//
// StringBuilder.prototype.append = function (str) {
//     this.string = this.string + str;
//
// };
// StringBuilder.prototype.prepend = function (str) {
//     this.string = str + this.string;
//
//
// };
// StringBuilder.prototype.pad = function (str) {
//     this.string = str + this.string + str;
// };
//
// StringBuilder.prototype.getValue = function () {
//     console.log(this.string);
// };
//
// const myString = new StringBuilder('.');
//
// myString.append('^');
// myString.getValue(); // '.^'
//
// myString.prepend('^');
// myString.getValue(); // '^.^'
//
// myString.pad('=');
// myString.getValue(); // '=^.^='
//
//
// class StringBuilder {
//     constructor(string){
//         this.string = string;
//     }
//     getValue (){
//         console.log(this.string);
//     }
//
//     append (str){
//         this.string = this.string + str;
//     }
//     prepend (str){
//         this.string = str + this.string;
//     }
//     pad (str){
//         this.string = str + this.string + str;
//     }
// }
//
//
// const cat = new StringBuilder('.');
//
// cat.append('^');
// cat.getValue();
//
// cat.prepend('^');
// cat.getValue(); // '^.^'
//
// cat.pad('=');
// cat.getValue(); // '=^.^='


/*
  Создайте класс Car с указанными полями и методами.
*/
//
// class Car {
//     constructor(maxSpeed) {
//
//         this.speed = 0;
//         this.maxSpeed = maxSpeed;
//         this.running = false;
//         this.distance = 0;
//         /*
//           Добавьте свойства:
//             - speed - для отслеживания текущей скорости, изначально 0.
//
//             - maxSpeed - для хранения максимальной скорости
//
//             - running - для отслеживания заведен ли автомобиль,
//               возможные значения true или false. Изначально false.
//
//             - distance - содержит общий киллометраж, изначально с 0
//         */
//     }
//
//     turnOn() {
//         this.running = true;
//     }
//
//     turnOff() {
//         this.running = false;
//         // Добавьте код для того чтобы заглушить автомобиль
//         // Просто записывает в свойство running значание false
//     }
//
//     accelerate(spd) {
//         this.spd = spd;
//         if (this.spd < this.maxSpeed){
//           return  this.speed = this.spd;
//         }
//         // Записывает в поле speed полученное значение, при условии что
//         // оно не больше чем значение свойства maxSpeed
//     }
//
//     decelerate(spd) {
//         if (spd < this.maxSpeed && spd > 0){
//             this.speed = spd;
//         }
//         // Записывает в поле speed полученное значение, при условии что
//         // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     }
//
//     drive(hours) {
//
//         if (this.running){
//            this.distance = hours * this.speed;
//         }
//         // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//         // но только в том случае если машина заведена!
//     }
// }
//
// const testCar = new Car(100);
//
// testCar.turnOn();
// testCar.accelerate(50);
// testCar.decelerate(40);
// testCar.drive(4);
//
// console.log(testCar);

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
