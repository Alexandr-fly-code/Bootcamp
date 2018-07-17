'use strict'

// const source = document.querySelector('#address-template').innerHTML.trim();
// console.log(source);
//
// const temp = Handlebars.compile(source);
// console.log(temp);
//
// const context = {
//     "city": "London",
//     "street": "Baker Street",
//     "number": "2218",
// };
//
//
// const markup = temp(context);
// console.log(markup);
//
// const container = document.querySelector('.content-placeholder');
//
// container.innerHTML = markup;
//
//
//
//
// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ]
// };
// const res = document.querySelector('#example-template').innerHTML.trim();
//
// const temps = Handlebars.compile(res);
// const el = temps(data);
// console.log(el);
//
// container.innerHTML += el;


// const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'ES6']
// };
//
// const id = document.querySelector('#menu').innerHTML.trim();
//
// const par = Handlebars.compile(id);
//
// const result = par(menuData);
//
// container.innerHTML += result;


/*
const data = {
    animals:[
        {
            name: "cow",
            noise: "moooo"
        },
        {
            name: "cat",
            noise: "meow"
        },
        {
            name: "fish",
            noise: ""
        },
        {
            name: "farmer",
            noise: "Get off my property!"
        }
    ]
};


const test = document.querySelector('#built-in-helpers-template').innerHTML.trim();
*/

//
// const gallery = {
//     title: 'Gallery',
//     items: [
//         {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
//         {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
//         {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
//         {img: 'https://placeimg.com/300/150/people', text: 'people'},
//         {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
//         {img: 'https://placeimg.com/300/150/any', text: 'random'}
//     ]
// };
//
// const templates = document.querySelector('#template').innerHTML.trim();
// const gal = Handlebars.compile(templates);
//
// const val = gal(gallery);
//
// const body = document.querySelector('body');
//
// body.innerHTML = val

//Начало------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
// let data = {
//     phones: [
//         {
//             id: "1",
//             categoryId: "1",
//             name: "Apple iPhone 5c",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 823,
//             image: "images/iphone5c-selection-hero-2013.png",
//             cpu: "1.3GHz Apple A86",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "2",
//             categoryId: "1",
//             name: "Apple iPhone 6",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 953,
//             image: "images/51u6y9Rm8QL._SY300_.jpg",
//             cpu: "1.3GHz Apple A69",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "3",
//             categoryId: "4",
//             name: "Lenovo A6000",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 764,
//             image: "images/_35%20(1).JPG",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "4",
//             categoryId: "5",
//             name: "Nokia Lumia 1520",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 674,
//             image: "images/Lumia1520-Front-Back-png.png",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "5",
//             categoryId: "3",
//             name: "HTC One",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 674,
//             image: "images/htc-one-m7-802w-dual-sim-silver.jpg",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "6",
//             categoryId: "2",
//             name: "Samsung Galaxy S6",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 674,
//             image: "images/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         }
//     ]
// };
// const containers = document.querySelector('.container');
//
// const templates = document.querySelector('#template').innerHTML.trim();
//
// const gallerys = Handlebars.compile(templates);
//
// const result = gallerys(data);
// //
// containers.innerHTML = result;
//
//
// // function block() {
//     const hide = document.querySelector('.hide');
//     // const info = document.querySelector('#info');
//     // info.classList.toggle('hide');
// //
// // }
//
// const btn = document.querySelectorAll('.btn');
// console.log(btn);
// const mass = Array.from(btn);
// // mass.includes()
// console.log(mass);
// // console.log(btn);
//
// // function tar() {
// //     if (btn){
// //         containers.addEventListener('click', block)
// //     }
// // }
// // tar()
// containers.addEventListener('click', options);
//
//
// function options() {
//     // console.log(mass.includes(event.target));
//     if(mass.includes(event.target)){
//         event.target.nextElementSibling.classList.toggle('hide')
//     }
//
// }
//Конец -----------------------------------------------------------------------------------------------------------------------------------------------
// function choose (event, idx) {
//     mass.some(el => {
//         if(event.target === el) {
//             mass[idx].classList.toggle('show')
//         }
//     })
// }

// containers.addEventListener('click', function (el) {
//     block()
//     // block()
//     stopPropagation()
//     // el.target.block()
//    // if (el.target === 'button'){
//    //     block()
//    // }
//    //  if (el.target === btn){
//    //      block()
//    //  }
//     console.log(el.target);
// });

//
// function infoDevice() {
//     const info = document.querySelector('#info').innerHTML.trim();
//
//     const infoTemplate = Handlebars.compile(info)
//
//     containers.innerHTML += infoTemplate(data);
//     // console.log(res);
//     // const infoTemplate = document
// }

// infoDevice();
// I


const data = {
    laptops: [
        {
            size: 13,
            color: 'white',
            price: 28000,
            releaseDate: 2015,
            name: 'Macbook Air White 13"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 13,
            color: 'gray',
            price: 32000,
            releaseDate: 2016,
            name: 'Macbook Air Gray 13"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 13,
            color: 'black',
            price: 35000,
            releaseDate: 2017,
            name: 'Macbook Air Black 13"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 15,
            color: 'white',
            price: 45000,
            releaseDate: 2015,
            name: 'Macbook Air White 15"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 15,
            color: 'gray',
            price: 55000,
            releaseDate: 2016,
            name: 'Macbook Pro Gray 15"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 15,
            color: 'black',
            price: 45000,
            releaseDate: 2017,
            name: 'Macbook Pro Black 15"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 17,
            color: 'white',
            price: 65000,
            releaseDate: 2015,
            name: 'Macbook Air White 17"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 17,
            color: 'gray',
            price: 75000,
            releaseDate: 2016,
            name: 'Macbook Pro Gray 17"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 17,
            color: 'black',
            price: 80000,
            releaseDate: 2017,
            name: 'Macbook Pro Black 17"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
    ]
};


const containers = document.querySelector('.container');

const templates = document.querySelector('#template').innerHTML.trim();

const gallerys = Handlebars.compile(templates);

const result = gallerys(data);
//
// containers.innerHTML = result;

const input = document.querySelector('.input')
const one = document.querySelector('input');
const mass = Array.from(one);
console.log(one.checked);
const res = mass.map(el => el.checked);
console.log(res);

// console.log(mass);

function ones() {
    // const finds = res.find(el => el === true);
    // if (finds){
    //
    // console.log(finds);
    // }else {
    //     return false
    //
    // }
    // if (mass.checked){
    //     console.log('ok');
    // }

    console.log(one.checked);
    // if(one.checked){
    //     console.log('ok');
    // }
    // console.log(mass.checked);

}
ones()

input.addEventListener('click', function (ev){
    if (mass.includes(ev.target)) {
        console.log(ev.target);
    }

    })
    // console.log(res);
    // // if (mass.includes(ev.target)){
    //     if (res.includes()){
    //         console.log('ok');
    //     }
    // console.log();
    // if (one.checked){
    //     console.log(mass);
    // }
    // if (mass.includes(ev.target)){
    //     const res2 = mass.map(el => el.checked);
    //     // console.log(res2);
    //     for (let i = 0; i < res2.length; i++){
    //     if (res2[i]){
    //         // console.log(res2.find(el => el));
    //         console.log('false');
    //     }
    //     }

    // }
    // if (mass.includes(ev.target) === mass.includes(mass.checked)){
    //     console.log(ev.target);
    // }
// if (one.checked){
    //     console.log(`ok`);
    // }
    // if (mass.includes(ev.target)){
        // console.log(`ok`);
        // ones()
        // console.log(mass.checked === true);
    // }/ё


// console.log(one.checked);





