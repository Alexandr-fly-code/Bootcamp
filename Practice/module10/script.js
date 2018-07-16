// const req = new XMLHttpRequest();
//
// // req.open(method, URL, async);
// req.open('GET', 'https://jsonplaceholder.typicode.com/', false);
// req.setRequestHeader('Content-type', 'application/json');
// req.send() //отправить
// req.abort()//остановить запрос

// const req = new XMLHttpRequest();
// // console.log(req);
// // settings
// // req.open(method, URL, async);
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
// req.setRequestHeader('Content-Type', 'application/json');
// // req.send([body])
// req.send();
//
// // req.abort()
//
// // status
// // https://developer.mozilla.org/ru/docs/Web/HTTP/Status
//
// if (req.status !== 200) {
//     console.error(`${req.status}: ${req.statusText} `)
// } else {
//     console.log(JSON.parse(req.response));
// }
// console.log(`test`)

// const req = new XMLHttpRequest();
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
// req.setRequestHeader('Content-Type', 'application/json');
// req.send();
// req.onreadystatechange = function () {
//     if (req.readyState !== 4) {
//         console.log(req.readyState);
//         return
//     }
//
//     if (req.status !== 200) {
//         console.error(`${req.status}: ${req.statusText} `)
//     } else {
//         console.log(JSON.parse(req.response));
//     }
// };
// //
// //
// console.log(`test`);

// fetch()
//
// let id = 152;
// fetch(url,{
//     method: 'DELETE',
//     body: JSON.stringify(id),
//     headers: new Headers({
//         'Content-Type': 'application/json',
//     }),
// });
// const div = document.querySelector('.container');
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => {
//     if (response.ok){
//     return response.json()
// }
// })
// .then(el => el.map(el => el.email))
// .then(el => el.sort())
// .then(res => createUL(res, div))
// .catch(error => console.log(error));
// //Всегда попадает функция
//
//
//
// function createUL(arr, container) {
//     // const ul = document.createElement('ul');
//     const li = document.createElement('li');
//
//     const mass = arr.reduce((acc, el) => acc + `<li>${el}</li>`, '');
//     const list = `<ul> ${mass} </ul>`;
//     container.innerHTML = list;
//     // ul.append(li)
// }
// function createUl(arr, container) {
//     const ul = document.createElement('ul');
//     const li = document.createElement('li');
//

// }
// const div = document.querySelector('.container');
// const test = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&category=background&order=popular&per_page=9';

// fetch(test)
// .then(response => {
//     if (response.ok){
//     return response.json()
// }
// })
// .then(el => el.hits)
//     .then(arr => arr.map(el => el.largeImageURL))
//     .then(el => gallery(el, div))
//     .catch(er => console.log(er))
//     // .then(el => console.log(el))
//     // .then(el => res(el, div))
//     // .then(mass => mass.hits)
//     // .then()
//     // .then(el => el['hits'])
//     // .then (el => console.log(el))
// // .then(el => console.log(el))
//
//
// // function res(arr, container) {
// //     const mass = arr.reduce((acc, item) => acc + `<li>${item}</li>`, '');
// //     const img = document.createElement('img');
// //     img.setAttribute('src', '')
// //     const ul = `<ul>${mass}</ul>`;
// //     container.innerHTML = ul;
// //
// // }
//
// function gallery(arr, container) {
//
//     for (let i =0; i < arr.length; i++){
//         const img = document.createElement('img');
//         img.classList.add('size');
//         img.setAttribute('src', arr[i])
//         // console.log(mass);
//         container.append(img);
//     }
//
//
// }

// const test = 'https://pixabay.com/api/videos?key=5018958-ed49ccd90878e6614abdf24a6&video_type=animation&category=nature&per_page=10';
//
// fetch(test)
//     .then(response => {
//         if (response.ok){
//             return response.json()
//         }
//     })
//     .then(el => el.hits)
//     .then(el => el.map(elem => elem.videos))
//     .then(el => el.map(elem => elem.medium))
//     .then(el => el.map(elem => elem.url))
//     .then(el => videos(el, div))
//     // .then(el => el.)
//
//
//
// function videos(arr, container) {
//     for (let i = 0; i < 5; i++){
//         const video = document.createElement('video');
//         const source = document.createElement('source');
//         video.setAttribute('autoplay', null)
//
//         source.setAttribute('src', arr[i]);
//         video.append(source);
//         container.append(video)
//         // div.append(video)
//     }
//
// }

const div = document.createElement('div');
const p = document.createElement('p');
const img = document.createElement('img');
// const test = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&category=background&order=popular&per_page=9';


function getValue() {
    const cars = document.querySelector('.cars').value;
    let url = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${cars}&per_page=9`;
    fetch(url)
        .then(el => {
            if (el.ok){
                return el.json();
            }
        })
        .then(el => el.hits)
        .then(el => el.map(elem => elem.largeImageURL))
        .then(el => gallery(el, divCon))
        // .then(el => )
    // cars = '';
    console.log(cars);
    document.querySelector('.cars').value = '';


}
const btn = document.querySelector('.btn');
btn.addEventListener('click', getValue);

window.addEventListener('keypress', function () {
   if (event.code === 'Enter'){
       getValue()
   }
});
const divCon = document.querySelector('#container');

function gallery(arr, container) {
    const frag = document.createDocumentFragment();
    container.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        const img = document.createElement('img');
        img.classList.add('size');
        img.setAttribute('src', arr[i])
        // console.log(mass);
        frag.append(img);
//     }
    }
    container.append(frag)
}
