// Флаги
// i - ігнорує регістр*
// g - глобальний погук а не перший збіг*
// m - багатостроковий пошук*
// Класи
// \d - numbers 0-9*
// \D - not numbers*
// \s - space*
// \S - not space*
// \w - word*
// \W - not word*
// \b - word or symbol with spase around*
// \B - not word*
// [] - набір *
// - діапазон *
// ^ - в [] це виключення за межами набору це початок строки*
// {} - показник кількості*
// () - група символів*
// + - один або більше
//     ? - нуль або один
// * - нуль або більше
//     . - будь - який символ*
// $ - кінець строки*
// (?:) - виключення результату
// x(?=y) - відповідність
// x(?!y) - відплвідність якщо не йде у після х
// x|y - або
//     ?<=
//         ?<!


let pattern = /w/;
const string = 'windows';

console.log(string.match(pattern)); //ищет первое совпадение
// console.log(string.test(pattern)); // даёт true либо false


let str = 'Is that all there is?';
let reg = /is/;
let regular = /is/i //игнорирует регистр
let regular2 = /is/g //ищет не одно совпадение (глобальный поиск)
let regular3 = /is/ig

console.log(str.match(regular3));



let number = '12345, 15ww. www h - whwhwh';

let reg1 = /5/g; //количество чисел 5 = 2 d - digit(цыфра)
let reg2 = /[0-9]/g // от 0 до 9
console.log(number.match(reg2).length);

let reg3 = /\d/g //целые числа
let reg4 = /\D/g; // не числа будет искать
let reg5 = /\s/; //ищет пробел
   let reg6 = /\w/g
console.log(number.match(reg6));

   let str2 = '1 random text 5',
   regV = /^\d/g // поиск цыфры на начале строки ^ указывает на начало строки

console.log(str2.match(regV));

   let home = /\w$/g, // $ указыввает на конец строки
    let revS = /...age./g //любой символ ищет
console.log(str.match(home));