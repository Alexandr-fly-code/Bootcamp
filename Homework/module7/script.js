'use strict'

// const jumbotron = document.querySelector('.jumbotron');
//
// // //create
// // const titleContainer = document.createElement('div');
// // const h1 = document.createElement('h1');
// // const span = document.createElement('span');
// // const deadpoolSpan = document.createElement('span');
// // const irresponsibilitySpan = document.createElement('span');
// // const p = document.createElement('p');
// //
// // const row = document.createElement('div');
// // const mainImg = document.createElement('img');
// //
// // const rowSubTitle = document.createElement('div');
// // const h1SubTitle = document.createElement('h1');
// //
// // const rowListContainer = document.createElement('div');
// // const ulListContainer = document.createElement('ul');
// // const mainImgs = document.createElement('img');
// //
// // const h1SubTitleLast = document.createElement('h1');
// // //Начало первого дива футера
// //
// // const rowFooter = document.createElement('div');
// // const colLs6 = document.createElement('div');
// // const blockquote = document.createElement('blockquote');
// // const pFooter = document.createElement('p');
// // const firstFooter = document.createElement('footer');
// // const citeFooterFirst = document.createElement('cite');
// //
// // //Конец
// //
// //
// // //Начало второго дива футера
// // const rowFooterLast = document.createElement('div');
// // const colMd6 = document.createElement('div');
// // const pSmall = document.createElement('p');
// // const colMd6Last = document.createElement('div');
// // const ulFooter = document.createElement('ul');
// //
// //
// // //Конец
// //
// // // const liListContainer = document.createElement('li');
// //
// // //add class
// // titleContainer.classList.add('row', 'title-container');
// // h1.classList.add('text-center');
// // span.classList.add('red-text');
// // deadpoolSpan.classList.add('red-text');
// // p.classList.add('text-center');
// // irresponsibilitySpan.classList.add('red-text');
// // mainImg.classList.add('img-responsive', 'inside-shadow');
// //
// // row.classList.add('row');
// //
// // rowSubTitle.classList.add('row', 'sub-title-container');
// // h1SubTitle.classList.add('text-center');
// //
// // rowListContainer.classList.add('row', 'list-container');
// // mainImgs.classList.add('img-responsive', 'inside-shadow');
// //
// // h1SubTitleLast.classList.add('text-center');
// // //Начало первого дива футера
// // rowFooter.classList.add('row');
// // colLs6.classList.add('col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3');
// // blockquote.classList.add('blockquote-reverse');
// // console.log(blockquote);
// //
// // //Конец
// //
// //
// // //Начало второго дива футера
// // rowFooterLast.classList.add('row', 'footer');
// // colMd6.classList.add('col-md-6');
// // colMd6Last.classList.add('col-md-6');
// // pSmall.classList.add('small-text');
// //
// //
// // //Конец
// //
// // // add attr
// // row.setAttribute('id', 'main-image-container');
// // mainImg.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg');
// // mainImg.setAttribute('alt', 'No images');
// // mainImgs.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg');
// // mainImgs.setAttribute('alt', 'No images');
// //
// // citeFooterFirst.setAttribute('title', 'Source Title');
// // //add text
// // const textDeadpool = 'DEADPOOL';
// // const pText = 'WITH GREAT POWER COMES GREAT';
// // const tribute = ' TRIBUTE PAGE';
// // const irres = ' IRRESPONSIBILITY';
// // const rowSubTitleText = 'TIMELINE';
// // const h1SubtitleText = 'QUOTE';
// // const pFooterText = 'MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.';
// // const citeText = 'Someone with a great ass';
// // const pTextFooter = 'All rights and lefts reserved.\n';
// //
// // span.insertAdjacentHTML('afterbegin', textDeadpool);
// // h1.insertAdjacentHTML('afterbegin', tribute);
// // p.insertAdjacentHTML('afterbegin', irres);
// // irresponsibilitySpan.insertAdjacentHTML('afterbegin', pText);
// // h1SubTitleLast.insertAdjacentHTML('afterbegin', h1SubtitleText);
// //
// //
// // h1SubTitle.insertAdjacentHTML('afterbegin', rowSubTitleText);
// // pFooter.insertAdjacentHTML('afterbegin', pFooterText);
// // citeFooterFirst.insertAdjacentHTML('afterbegin', citeText);
// // pSmall.insertAdjacentHTML('afterbegin', pTextFooter);
// //
// // // console.log(span);
// //
// // //paste
// // jumbotron.insertAdjacentElement('afterbegin', titleContainer);
// // titleContainer.insertAdjacentElement('afterbegin', h1);
// // h1.insertAdjacentElement('afterbegin', span);
// // h1.insertAdjacentElement('afterend', p);
// // p.insertAdjacentElement('afterbegin', irresponsibilitySpan);
// //
// // jumbotron.append(row);
// // row.append(mainImg);
// // jumbotron.append(rowSubTitle);
// // rowSubTitle.append(h1SubTitle);
// //
// // jumbotron.append(rowListContainer);
// //
// // rowListContainer.append(ulListContainer);
// //
// // const massListTextFirst = ['SOME YEAR',
// //     'SOME YEAR',
// //     'SOME OTHER YEAR',
// //     'SOME OTHER DIFERENT YEAR',
// //     'YET ANOTHER YEAR',
// //     'YESTERDAY?',
// //     'NO...',
// //     'WHO CARES?',
// //     'DUNNO',
// //     'MEEH',
// //     '????',
// //     '@$%^#',
// //
// // ];
// // const liListText = ['- BORN IN CANADA AS WADE WILSON.',
// //     '- HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.',
// //     '- WADE BEGAN HIS MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.',
// //     '- IN AMERICA, HE MET AND FELL IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.',
// //     '- LEARNING THAT HE HAD CONTRACTED CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.',
// //     '- IN PURSUE OF HOPE FOR HIS TERMINAL CONDITION, HE JOINS THE WEAPON X PROGRAM',
// //     '- HIS CANCER WAS TEMPORARILY ARRESTED VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE',
// //     '- DURING ONE MISSION, WILSON KILLED HIS TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.',
// //     '- IN THE HOSPICE HE WAS TORTURED BY THE DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR DEAD',
// //     '- FOLLOWING HIS ESCAPE HE SOON RETURNED TO HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL',
// //     '- WHY DO YOU KEEP READING, THIS IS SO BORING...'];
// // const frag = document.createDocumentFragment();
// // for (let i = 0; i < liListText.length; i++) {
// //     const liCreate = document.createElement('li');
// //     liCreate.classList.add('list-item');
// //     liCreate.innerHTML = `<span class="red-text">${massListTextFirst[i]}</span> ${liListText[i]}`;
// //     frag.append(liCreate);
// //
// // }
// // ulListContainer.append(frag);
// //
// // const clone = row.cloneNode(false);
// //
// // jumbotron.append(clone);
// // clone.append(mainImgs);
// //
// // const cloneLast = rowSubTitle.cloneNode(false);
// // jumbotron.append(cloneLast);
// //
// // cloneLast.append(h1SubTitleLast);
// //
// //
// // jumbotron.append(rowFooter);
// // rowFooter.append(colLs6);
// // colLs6.append(blockquote);
// // blockquote.append(pFooter);
// // blockquote.append(firstFooter);
// // firstFooter.append(citeFooterFirst);
// //
// //
// // // Инициализация второго дива
// // jumbotron.append(rowFooterLast);
// // rowFooterLast.append(colMd6);
// // rowFooterLast.append(colMd6Last);
// // colMd6.append(pSmall);
// // colMd6Last.append(ulFooter);
// //
// //
// // mass = ['Made as a <a href="https://www.freecodecamp.com/" target="_blank">CodeCamp</a> project',
// //     '<a href="http://www.foxmovies.com/movies/deadpool" target="_blank">Assets and idea</a>',
// //     '<a href="http://marvel.com/universe/Deadpool_(Wade_Wilson)" target="_blank">Info</a>',
// //     '<a href="https://twitter.com/deadpoolmovie" target="_blank">The best twitter ever</a>'
// // ];
// // const fragFooter = document.createDocumentFragment();
// //
// // for (let i = 0; i < mass.length; i++) {
// //     const liiii = document.createElement('li');
// //     liiii.innerHTML = mass[i];
// //     frag.append(liiii);
// // }
// // ;
// //
// // ulFooter.append(frag);
//
//
// function createNode(tag, classArr, attrObj, text, mode, container) {
//     let el = document.createElement(tag);
//     for (let className of classArr) {
//         el.classList.add(className);
//     }
//
//     for (let key in attrObj) {
//         let hasKey = attrObj.hasOwnProperty(`${key}`);
//         if (hasKey){
//             el.setAttribute(`${key}`, attrObj[`${key}`]);
//         }
//     }
//
//     el.textContent = text;
//     container[mode](el);
//     return el;
// }
//
//
// const title = createNode('div', ['row','title-container'], null, null, 'append', jumbotron);
//
// console.log(title);
// createNode('h1', ['text-center'], null, 'TRIBUTE PAGE', 'append', title);
// const pCenter = createNode('p', ['text-center'], null, 'WITH GREAT POWER COMES GREAT', 'append', title);
// createNode('span', ['red-text'], null, ' IRRESPONSIBILITY', 'append', pCenter);
//
//
// const title2 = createNode('div', ['row'], {id: 'main-image-container'}, null, 'append', jumbotron);
// createNode('img', ['img-responsive', 'inside-shadow'], {src: 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg',
//     alt: 'Kyky',}, null, 'append', title2);
//
// const title3 = createNode('div', ['row','list-container'], null, null, 'append', jumbotron);
//
// const titleUl = createNode('ul', [], null, null, 'append', title3);
//
// const massListTextFirst = ['SOME YEAR',
//     'SOME YEAR',
//     'SOME OTHER YEAR',
//     'SOME OTHER DIFERENT YEAR',
//     'YET ANOTHER YEAR',
//     'YESTERDAY?',
//     'NO...',
//     'WHO CARES?',
//     'DUNNO',
//     'MEEH',
//     '????',
//     '@$%^#',
//
// ];
// const liListText = ['- BORN IN CANADA AS WADE WILSON.',
//     '- HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.',
//     '- WADE BEGAN HIS MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.',
//     '- IN AMERICA, HE MET AND FELL IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.',
//     '- LEARNING THAT HE HAD CONTRACTED CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.',
//     '- IN PURSUE OF HOPE FOR HIS TERMINAL CONDITION, HE JOINS THE WEAPON X PROGRAM',
//     '- HIS CANCER WAS TEMPORARILY ARRESTED VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE',
//     '- DURING ONE MISSION, WILSON KILLED HIS TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.',
//     '- IN THE HOSPICE HE WAS TORTURED BY THE DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR DEAD',
//     '- FOLLOWING HIS ESCAPE HE SOON RETURNED TO HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL',
//     '- WHY DO YOU KEEP READING, THIS IS SO BORING...',
//     'Hey',
// ];
// // const frag = document.createDocumentFragment();
// // for (let i = 0; i < liListText.length; i++) {
// //     const liCreate = document.createElement('li');
// //     liCreate.classList.add('list-item');
// //     liCreate.innerHTML = `<span class="red-text">${massListTextFirst[i]}</span> ${liListText[i]}`;
// //     frag.append(liCreate);
// //
// // }
// // ulListContainer.append(frag);
// //]
//
//
// for (let i = 0; i < massListTextFirst.length; i++){
// const titleLi = createNode('li', ['list-item'], null, ` ${liListText[i]}`, 'append', titleUl);
// const spanLI = createNode('span', ['red-text'], null, `${massListTextFirst[i]}`, 'prepend', titleLi);
// }
// // console.log(title3);
//
// const title4 = createNode('div', ['row'], {id: 'main-image-container'}, null, 'append', jumbotron);
// createNode('img', ['img-responsive', 'inside-shadow'], {src: 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg',
//     alt: 'Kyky',}, null, 'append', title4);
//
// const title5 = createNode('div', ['row', 'sub-title-container'], null, null, 'append', jumbotron);
// const h1Title5 = createNode('h1', ['text-center'], null, 'QUOTE', 'append', title5);
//
//
// const title6 = createNode('div', ['row'], null, null, 'append', jumbotron);
// const divTitle = createNode('div', ['col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3'], null, null, 'append', title6);
// const blockquote = createNode('blockquote', ['blockquote-reverse'], null, null, 'append', divTitle);
// const pTitle6 = createNode('p', [], null, 'MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.', 'append', blockquote);
// const footerid = createNode('footer', [], null, null, 'append', blockquote);
// const cite = createNode('cite', [], {title: 'Source Title'}, 'Someone with a great ass', 'append', footerid);
//
//
// const title7 = createNode('div', ['row', 'footer'], null, null, 'append', jumbotron);
// const titleSmall = createNode('div', ['col-md-6'], null, null, 'append', title7);
// const pSmall = createNode('p', ['small-text'], null, 'All rights and lefts reserved.', 'append', titleSmall);
//
// const colMd6 = createNode('div', ['col-md-6'], null, null, 'append', title7);
// const ulFooter = createNode('ul', [], null, null, 'append', colMd6);
//
//
// mass = ['Made as a <a href="https://www.freecodecamp.com/" target="_blank">CodeCamp</a> project',
//     '<a href="http://www.foxmovies.com/movies/deadpool" target="_blank">Assets and idea</a>',
//     '<a href="http://marvel.com/universe/Deadpool_(Wade_Wilson)" target="_blank">Info</a>',
//     '<a href="https://twitter.com/deadpoolmovie" target="_blank">The best twitter ever</a>'
// ];
// const frag = document.createDocumentFragment();
//
// for (let i = 0; i < mass.length; i++) {
//     const liFooter = createNode('li', [], null, null, 'append', ulFooter);
//     liFooter.innerHTML = mass[i];
//     frag.append(liFooter)
//     // console.log(liFooter);
// }
//
// ulFooter.append(frag);
//
//
//
//
//
//     // / for (let i = 0; i < liListText.length; i++) {
// //     const liCreate = document.createElement('li');
// //     liCreate.classList.add('list-item');
// //     liCreate.innerHTML = `<span class="red-text">${massListTextFirst[i]}</span> ${liListText[i]}`;
// //     frag.append(liCreate);
//
//


// const one = document.querySelector('#one');
// // const many = document.querySelector('#many');
//
// function first() {
//     alert(`I am action from first button`);
// }
// //
// // one.addEventListener('click', first);
// const two = document.querySelector('#many');

// many.addEventListener('click', function () {
//     first();
//     first();
//     first();
// });

//
// function withRemoveListener (){
//     alert('I am action');
//     many.removeEventListener('click', withRemoveListener);
//
// }
//
// many.addEventListener('click', withRemoveListener());

// function withRemoveListener() {
//     alert(`I am action from first button and i remove after end`);
//     many.removeEventListener('click', withRemoveListener);
//
// }
//
// many.addEventListener('click', withRemoveListener);
//
// let clickNumber = 0;
// //this
//
// function clickCount(number) {
//     if (number>3){
//         alert('Ne balyis9');
//     }
//     number+=1;
//     console.log(number);
// }
//
// let firstButton = document.querySelector('#one');
// firstButton.addEventListener('click', function () {
//    clickCount(clickNumber)
// });
//
//
// function showThis() {
//     console.log(this);
// };
//
// showThis()


// function clickCount() {
//     let clickNumber = 0;
//     let limit = 3;
//     let fake = clickNumber;
//     function increment() {
//         fake += 1;
//         if (fake > limit) {
//             alert('Не балуйся, йди на роботу');
//         }
//         console.log(clickNumber);
//     }
//
//     return increment;
// }
//
// let counter = clickCount();
// console.log(counter);
//
// let firstButton = document.querySelector('#one');
//
// firstButton.addEventListener('click', counter);

//
// function showThis() {
//     // console.log(this);
//     this.classList.toggle();
// }
//
// showThis();
//
// let one = document.querySelector('#one');


'use strict';
// function classAdd() {
//     this.classList.toggle('bigBtn');
// }
//
// // showThis();
//
// let one = document.querySelector('#one');
//
// one.addEventListener('click', classAdd);
//


function classAdd(event) {
    console.log(event);
}

// showThis();

let one = document.querySelector('#one');

one.addEventListener('click', function (event) {
    classAdd(event, 5)
});


window.addEventListener('keypress', classAdd)
