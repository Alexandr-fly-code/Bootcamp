'use strict';
// const items = document.querySelectorAll('.list');
//
// const arrItems = Array.from(items);
// // const mass = arrItems.map(el => el);
// // console.log(mass);
// const itemList = document.querySelector('.item-list')
//
// function elem(el) {
//     console.log(el.target);
//
// }
// items.addEventListener('click', elem);

// const list = document.querySelector('.list');
//
// const items = document.querySelectorAll('.item');
// const button = document.querySelector('#button');
// function wind() {
//     // console.log(e.target);
//     list.classList.toggle('list');
//     // console.log(window.location);
//     // list.
//     // console.log(el.target);
//     // el.target.style.color = 'red';
//     // el.target.classList.toggle('color');
//     // console.log(navigator.userAgent);
// }
//
// button.addEventListener('click', wind);



//
// let cont = document.querySelector('.cont');
// let bodyPaste = document.body;
// let overlay = document.createElement('div');
// let img = document.createElement('img');
//
//
// function gallery() {
//     // display overlay
//     // let overlay = document.createElement('div');
//     overlay.classList.add('overlay');
//     bodyPaste.prepend(overlay);
//     console.log(event.target.dataset);
//     // add large picture in the middle
//     // let img = document.createElement('img');
//     img.classList.add('modal-pic');
//     img.setAttribute('src', event.target.dataset.big);
//     img.setAttribute('alt', 'picture');
//     overlay.append(img);
// }
//
//
// cont.addEventListener('click', gallery);

// overlay.addEventListener('click', (e) => e.target !== img ? overlay.remove() : null);

let galleryArr = [
    {small: 'https://placeimg.com/480/240/animals', big: 'https://placeimg.com/960/480/animals'},
    {small: 'https://placeimg.com/480/240/arch', big: 'https://placeimg.com/960/480/arch'},
    {small: 'https://placeimg.com/480/240/nature', big: 'https://placeimg.com/960/480/nature'},
    {small: 'https://placeimg.com/480/240/people', big: 'https://placeimg.com/960/480/people'},
    {small: 'https://placeimg.com/480/240/tech', big: 'https://placeimg.com/960/480/tech'},
    {small: 'https://placeimg.com/480/240/animals/grayscale', big: 'https://placeimg.com/960/480/animals/grayscale'},
    {small: 'https://placeimg.com/480/240/tech/sepia', big: 'https://placeimg.com/960/480/tech/sepia'},
    {small: 'https://placeimg.com/480/240/people/sepia', big: 'https://placeimg.com/960/480/people/sepia'},
    {small: 'https://placeimg.com/480/240/arch/sepia', big: 'https://placeimg.com/960/480/arch/sepia'},
    {small: 'https://placeimg.com/480/240/nature/grayscale', big: 'https://placeimg.com/960/480/nature/grayscale'},
];