
let userInput;
const numbers = [];
let total = 0;
    do {
    userInput = prompt('Введите число');
    if (Number.isInteger(+userInput)){
        numbers.push(+userInput);
    } else {
        alert(`Было введено не число, попробуйте еще раз'`);
    }
} while (userInput !== null)
if (userInput === null){
    numbers.pop(userInput);
}
console.log(numbers);

for (let key of numbers){
    total +=key;
}

alert(`Общая сумма чисел равна : ${total}`);
