// const html = document.documentElement;
// console.log(html);
// const body = document.body;
// console.log(body);
// console.log(body.childNodes);
// console.log(body.children);
// console.log(body.firstChild);
// console.log(body.firstElementChild);первый элемент
// console.log(body.lastChild);
// console.log(body.lastElementChild);
// const div = body.children[0];
// console.log(div);
// console.log(div.children);
// console.log(div.lastElementChild);последний элемент
// console.log(div.lastChild);
// const p = div.children[1];
// console.log(p);
// console.log(p.previousElementSibling);предыдущий элемент
// console.log(p.previousSibling);
// console.log(p.nextElementSibling);
// console.log(p.nextSibling);
// console.log(p.parentNode);


/*
  Есть список категорий с классом categories (на вкладке HTML).

  Напишите код, который для каждого элемента li (первая вложенность)
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li

  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// const body = document.querySelector('body');
// const ul = document.querySelector('.categories');
//
// // console.log(ul.parentNode);
// // console.log(ul.firstChild);
// // console.log(ul.firstElementChild);
// const mass = Array.from(ul.children);
// // console.log(mass[0].firstChild);
// console.log(mass[0].firstElementChild.children.length);
//
// const mass2 = mass.map(el => {
//    // el.firstElementChild.children.length;
//     console.log(`Категория = ${el.firstChild.textContent} Количество вложенных li ${el.firstElementChild.children.length}`);
// });

// console.log(mass2);

// console.log(mass2);
// const mass2 = mass.map(el => el.textContent);
// console.log(mass2);


/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// const list = document.querySelector('.list');
// console.log(list);
//
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
//
// const red = list.firstElementChild;
// const blue = list.lastElementChild;
// red.style.color = 'red';
// blue.style.color = 'blue';

// const list = document.querySelector('.list');
// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
//
// const frag = document.createDocumentFragment();
//
// for (let i = 0; i < elements.length; i++){
//     const li = document.createElement('li');
//     li.textContent = elements[i];
//     frag.append(li)
// }
//
// list.append(frag);


/*
  Напишите скрипт для создания списка ul.

  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/


// const body = document.querySelector('body');
// const div = document.createElement('div');
// const ul = document.createElement('ul');

// while (!user === null){
//     const user = prompt('Введите содержимое списка');
//     const li = document.createElement('li');
//     li.textContent = user;
//     ul.append(li);
// }
// let user = true;
// const frag = document.createDocumentFragment();
// while (user === true){
//
//     const user2 = prompt('Введите содержимое списка');
//     if (user2 === null){
//         user = false;
//     } else {
//     const li = document.createElement('li');
//     li.textContent = user2;
//         frag.append(li);
//     }
// }
// ul.append(frag);
//
// // for (let i = 0; i < 5; i++){
// //     const user = prompt('Введите содержимое списка');
// //     if (user === null){
// //         break;
// //     } else {
// //     const li = document.createElement('li');
// //     li.textContent = user;
// //     ul.append(li);
// //     }
// // }
//
// body.append(div);
// div.append(ul);


// Создайте функцию createPostCard(), которая
// создает и возвращает DOM-узел карточки поста.
//
//     Разметка с классами есть на вкладке HTML.
//     Стили на вкладке CSS.
//
//     Используйте createElement для создания узлов.
//     Добавьте классы и атрибуты.
const body = document.querySelector('body');
//
// // function createPostCard() {
// //     const div = document.createElement('div');
// //     const img = document.createElement('img');
// //     const h2 = document.createElement('h2');
// //     const p = document.createElement('p');
// //     const a = document.createElement('a');
// //
// //     div.classList.add('post');
// //     img.classList.add('post__image');
// //     h2.classList.add('post__title');
// //     p.classList.add('post__text');
// //     a.classList.add('button');
// //
// //     img.setAttribute('src', 'http://via.placeholder.com/400x150', 'alt', 'post image');
// //     a.setAttribute('href', '#');
// //
// //     h2.textContent = 'Lorem ipsum dolor';
// //     p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
// //     a.textContent = 'Read more';
// //     body.append(div);
// //     div.append(img);
// //     div.append(h2);
// //     div.append(p);
// //     div.append(a);
// //
// // }
// //
// // createPostCard();
// const root = document.querySelector('#root');
// const mass = ['rgb(255, 0, 0)', 'rgb(245, 2, 1)', 'rgb(205, 2, 5)', 'rgb(255, 129, 0)', 'rgb(255, 129, 158)', 'rgb(255, 129, 31)'];
//
// function createBoxes(num) {
//     const frag = document.createDocumentFragment();
//     for (let i = 0; i < num; i++) {
//         const div = document.createElement('div');
//
//         div.textContent = 'create';
//         div.style.background = mass[Math.floor(Math.random() * mass.length)];
//
//         div.style.width = `${30 + i * 10}px`;
//         div.style.height = `${30 + i * 10}px`;
//
//         frag.append(div);
//
//         console.log(Math.floor(Math.random() * 10));
//     }
//     root.append(frag);
//     console.log(root.style);
// }
//
// createBoxes(100);
// const div = createPostCard('div', ['post'], null, null, 'append', body);
// createPostCard('img', ['post__image'], {src: 'google.com',}, null, 'append', div);
//
// const button = document.querySelector('button');
//
// function addCounter(){
//     button.textContent++;
// }
//
// button.addEventListener('click', function () {
//     addCounter();
// });

//task2

// const input1 = document.querySelector('#input1');
//
// const input2 = document.querySelector('#input2');
//
// const button = document.querySelector('button');
//
// const result = document.querySelector('.result');
//
//
// function sum(){
//     result.textContent = Number(input1.value) + Number(input2.value);
// }
//
//
// button.addEventListener('click', function () {
//     sum()
// });
//
// const btnSub = document.querySelector('.js-sub');
// const jsValue = document.querySelector('.js-value');
// const btnAdd = document.querySelector('.js-add');
//
// function justSub(){
//     if (jsValue.textContent < 1){
//         return
//     }else {
//         jsValue.textContent--;
//     }
// }
//
// function justAdd(){
//     jsValue.textContent++;
// }
//
//
// btnSub.addEventListener('click', function () {
//     justSub();
// });
//
//
// btnAdd.addEventListener('click', function () {
//     justAdd();
// });

//task4

// const result = document.querySelector('.result');
// const btns = document.querySelector('.btn');
//
// function btn() {
//     const input = document.querySelectorAll('input');
//     const mass = Array.from(input);
//     console.log(mass);
//     let find = mass.find(el => el.checked);
//     result.textContent = find.value;
// }
//
// btns.addEventListener('click', function (e) {
//     e.preventDefault();
//    btn();
// });


// const images = document.querySelector('.images');
//
// images.addEventListener('click', function (el) {
//     console.log(el.target.src);
// });


// const list = document.querySelector('.list');
// const btn = document.querySelector('button');
// const button1 = document.querySelector('#button1');
// const button2 = document.querySelector('#button2');
// const button3 = document.querySelector('#button3');
// const li = document.querySelector('li');
//
// function deleted(){
//     li.remove();
// }
//
// btn.addEventListener('click', function () {
//     deleted()
// });

//task7

const input = document.querySelector('.inputs');
console.log(input.children);
const mass = Array.from(input.children);
// <input type="text" data-length="2" placeholder="2 символа">




input.addEventListener('click', function (el) {
    console.log(el.target);
    if (el.target.placeholder === '2 символа'){
        console.log(el.target.placeholder);
    }else {
        console.log(el.target.placeholder);
    }
});
console.log(mass);







