// Hamburger.SIZE_SMALL = 'SIZE_SMALL';
// Hamburger.SIZE_LARGE = ...
//
// Hamburger.SIZES = {
//     [Hamburger.SIZE_SMALL]: {
//         price: 30,
//         calories: 50,
//     },
// };
//
// Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
// Hamburger.STUFFING_SALAD = ...
// Hamburger.STUFFING_MEAT = ...
//
// Hamburger.STUFFINGS = {
//     [Hamburger.STUFFING_CHEESE]: {
//         price: 15,
//         calories: 20,
//     },
// };
//
// Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
// Hamburger.TOPPING_SAUCE = ...
//
// Hamburger.TOPPINGS = {
//     [Hamburger.TOPPING_SPICE]: {
//         price: 10,
//         calories: 0,
//     },
// };
const menuTopping = {
    topping: {
        spice: {
            price: 15,
            calories: 20,
        },
        sauce: {
            price: 20,
            calories: 5,
        },
    }
};
const SPICE = menuTopping.topping.spice;
const SAUCE = menuTopping.topping.sauce;


const menuStuffing = {
    stuffing: {
        cheese: {
            price: 15,
            calories: 20,
        },
        salad: {
            price: 20,
            calories: 5,
        },
        meat: {
            price: 35,
            calories: 15,
        },
    }
};
const CHEESE = menuStuffing.stuffing.cheese;
const SALAD = menuStuffing.stuffing.salad;
const MEAT = menuStuffing.stuffing.meat;

const menuSizes = {
    size: {
        small: {
            name: 'small',
            price: 100,
            calories: 100,
        },
        large: {
            name: 'large',
            price: 250,
            calories: 350,
        }
    }
};
const BIG = menuSizes.size.large;
const SMALL = menuSizes.size.small;
// this.size = menu;


class Hamburger {

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }




    addTopping(topping) {

        this.topping = topping;
        if (this.topping.hasOwnProperty(this.topping)){
            console.log(this.topping);
        }else {
            console.log(`уже добавлено`);
        }
    }


    removeTopping(topping) {
        delete this.size;
    }


    getToppings() {
        return this.topping;
    }


    getSize() {
        return this.size;
    }


    getStuffing() {
        return this.stuffing;
    }


    calculatePrice() {
        return this.topping.price + this.size.price + this.stuffing.price;
    }


    calculateCalories() {
        return this.topping.calories + this.size.calories + this.stuffing.calories;
         }



}


//
// /* Вот как может выглядеть использование этого класса */
//
// // Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(SMALL, CHEESE);
// console.log(hamburger.getSize());
// console.log(hamburger.calculateCalories());
// console.log(hamburger);
// // // Добавка из приправы
console.log(hamburger);

hamburger.addTopping(SPICE);

console.log(hamburger);

hamburger.addTopping(SAUCE);
console.log(hamburger);

// // // Спросим сколько там калорий
// console.log("Calories: ", hamburger.calculateCalories());
//
// // Сколько стоит?
// console.log("Price: ", hamburger.calculatePrice());
//
// // Я тут передумал и решил добавить еще соус
// hamburger.addTopping(SAUCE);
// console.log(hamburger);
//
// // А сколько теперь стоит?
// console.log("Price with sauce: ", hamburger.calculatePrice());
//
// // Проверить, большой ли гамбургер?
// console.log("Is hamburger large: ", hamburger.getSize() === BIG); // -> false
//
// // Убрать добавку
// hamburger.removeTopping(SPICE);
// console.log(hamburger);
// // Смотрим сколько добавок
// console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1


// let enemy = [];
//
// for (let i = 100; i < 250; i+=75){
//     for (let k = 25; k < 1000; k+=100){
//         // console.log({k}, {i});
//         let obj = {
//             left: k,
//             top: i,
//         };
//
//         enemy.push(obj);
//
//     }
// }
//
// console.log(enemy);

