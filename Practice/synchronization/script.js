// setTimeout(callback, delay) код который выполняется с задержкой   1sec = 1000ms;
// setInterval() один и тотже код может выполнятся каждые 2 секунды

// function hello() {
//     console.log(`hello`);
// };
// const id = setInterval(hello, 1000);
// console.log(id);


const btn = document.querySelector('button');

btn.addEventListener('click', function () {
   clearInterval(id);
});
// clearTimeout выключение


//Data работа с датами вся инфа начинается с милисекунд 1 января 1970

let date = new Date();
console.log(`${date.getHours()} : ${date.getMinutes()}`);

// function sec() {
//     date.getSeconds()
// };
//
// console.log(setInterval(sec, 1000));


let dates = new Date('March, 4, 2016');// посмотреть что было такого года
console.log(dates);


let user = prompt('ble');
let user2 = prompt('ble2');
let user3 = prompt('ble3');
// let one = user.getDay();
// console.log(one);
// if (user){
//     let date = new Date('March');
//     console.log(date);
// }else if (user2){
//     let date = new Date('4');
//     console.log(date);
// }else if (user3){
//     let date = new Date('2017');
//     console.log(date);
// }

let days =['Неділя','Понеділок','Вівторок','Середа','Четвер','Пятниця','Субота'];
let data = new Date(`${(user)} ${user2} ${user3}`);
console.log(days[data.getDay()]);
// console.log(data);