'use strict'


// const btn = document.querySelector('.btn');
// const btnUnclick = document.querySelector('.btn-unclick');
// const listen = document.querySelector('.listen')
//
// function click() {
//     console.log(`Click`);
// }
//
// function unClick() {
//     // console.log(`Unclick`);
//     btn.removeEventListener('click', click)
// }
//
// btn.addEventListener('click', click);
//
// btnUnclick.addEventListener('click', unClick);
//
//
// function addClick(){
//     btn.addEventListener('click', click);
// }
//
// listen.addEventListener('click', addClick);
//
//
// btn.addEventListener('click', (event) => {
//     console.log(event);
// });
//
// const events = document.querySelector('.events');
//
// events.addEventListener('click', (el) => {
//     console.log(el.target.src);
// });
// events.addEventListener('click', function () {
    // console.log('hello );
// })
// console.log(images);


































//
// const button = document.querySelector('.button');
//
// button.addEventListener('click', function () {
//     button.textContent++;
// });

// const button = document.querySelector('button');
// const one = document.querySelector('#one');
// const two = document.querySelector('#two');
// const result = document.querySelector('.result')
// function getAtr (){
//     const place = document.querySelector('input');
//     const sum = Number(one.value) + Number(two.value);
//     result.textContent = sum;
// }
//
// button.addEventListener('click', () => {
//     getAtr()
// });



//3 task

// const jsSub = document.querySelector('.js-sub');
// const jsValue = document.querySelector('.js-value');
// const jsAdd = document.querySelector('.js-add');
//
//
// function sub() {
//     if (jsValue.textContent < 1){
//         return;
//     } else {
//     jsValue.textContent--;
//     };
// }
//
// function add() {
//     jsValue.textContent++;
// }
//
// jsSub.addEventListener('click', sub);
// jsAdd.addEventListener('click', add);


//4 task
// const body = document.querySelector('body');
// const btn = document.querySelector('.btn');
//
// const options = document.querySelector('.options');
//
// const input = document.querySelector('input');
// const result = document.querySelector('.result');
// // console.log(options);
//
// function check(){
//     if (input.value === 'grid' || input.value === 'css' || input.value === 'html' || input.value === 'php' || input.value === 'javascript'){
//         result.textContent = input.value;
//     }
// }
//
// input.addEventListener('click', function (event) {
//     // event.preventDefault();
//     console.log(event.target);
//     // check();
//     // console.log(input.value);
// });


//task5


// const images = document.querySelector('.images');
//
// images.addEventListener('click', function (el) {
//     console.log(el.target.src);
//     alert(el.target.src);
// });

//task6

const ul = document.querySelector('.list');
const li = document.querySelector('#li-last');

ul.addEventListener('click', function (el) {
    console.log(el.target);
    el.target.textContent = li.remove();
});