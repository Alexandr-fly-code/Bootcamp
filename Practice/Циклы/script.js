

class Hamburger {
    constructor(size, stuffing) {
        this._size = size;
        this._stuffing = stuffing;
        this._topping = [];
    }


    addTopping(topping){
        if (!this._topping.includes(topping)){
            this._topping.push(topping);
        } else {
            console.log(`Уже добавлено`);
        }
    }


    removeTopping(topping){
        if (this._topping.includes(topping)){
           this._topping = this._topping.filter(function (elem) {
               if (elem !== topping){
                  return elem;
               } else {
                   // console.log(`ОК`);
               }
           })
        }

    }

    get getToppings() {
       return this._topping
    }


    get getSize (){
        return this._size;
    }

    get getStuffing() {
        return this._stuffing;
    }

    calculatePrice() {
       return  Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price + this._topping.reduce((acc, elem) => acc + Hamburger.TOPPINGS[elem].price, 0);
    }


    calculateCalories(){
        return  Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories + this._topping.reduce((acc, elem) => acc + Hamburger.TOPPINGS[elem].calories, 0)
    }


    getBurgerInfo(){
        return Hamburger.SIZES[this._size].price;
    }

}




Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';


Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100,
    },
};


Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5,
    },
    [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15,
    },
};

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5,
    },
};


const burger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);



burger.addTopping(Hamburger.TOPPING_SPICE);

console.log("Calories: ", burger.calculateCalories());

console.log("Price: ", burger.calculatePrice());

burger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Price with sauce: ", burger.calculatePrice());

console.log("Is hamburger large: ", burger.getSize === Hamburger.SIZE_LARGE); // -> false
console.log(burger);

burger.removeTopping(Hamburger.TOPPING_SPICE);

console.log("Hamburger has %d toppings", burger.getToppings.length); // 1

