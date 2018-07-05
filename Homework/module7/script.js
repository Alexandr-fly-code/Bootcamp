const jumbotron = document.querySelector('.jumbotron');

//create
const titleContainer = document.createElement('div');
const h1 = document.createElement('h1');
const span = document.createElement('span');
const deadpoolSpan = document.createElement('span');
const irresponsibilitySpan = document.createElement('span');
const p = document.createElement('p');

const row = document.createElement('div');
const mainImg = document.createElement('img');

const rowSubTitle = document.createElement('div');
const h1SubTitle = document.createElement('h1');

const rowListContainer = document.createElement('div');
const ulListContainer = document.createElement('ul');
const mainImgs = document.createElement('img');

const h1SubTitleLast = document.createElement('h1');
//Начало первого дива футера

const rowFooter = document.createElement('div');
const colLs6 = document.createElement('div');
const blockquote = document.createElement('blockquote');
const pFooter = document.createElement('p');
const firstFooter = document.createElement('footer');
const citeFooterFirst = document.createElement('cite');

//Конец


//Начало второго дива футера
const rowFooterLast = document.createElement('div');
const colMd6 = document.createElement('div');
const pSmall = document.createElement('p');
const colMd6Last = document.createElement('div');
const ulFooter = document.createElement('ul');



//Конец

// const liListContainer = document.createElement('li');

//add class
titleContainer.classList.add('row', 'title-container');
h1.classList.add('text-center');
span.classList.add('red-text');
deadpoolSpan.classList.add('red-text');
p.classList.add('text-center');
irresponsibilitySpan.classList.add('red-text');
mainImg.classList.add('img-responsive', 'inside-shadow');

row.classList.add('row');

rowSubTitle.classList.add('row', 'sub-title-container');
h1SubTitle.classList.add('text-center');

rowListContainer.classList.add('row', 'list-container');
mainImgs.classList.add('img-responsive', 'inside-shadow');

h1SubTitleLast.classList.add('text-center');
//Начало первого дива футера
rowFooter.classList.add('row');
colLs6.classList.add('col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3');
blockquote.classList.add('blockquote-reverse');
console.log(blockquote);

//Конец



//Начало второго дива футера
rowFooterLast.classList.add('row', 'footer');
colMd6.classList.add('col-md-6');
colMd6Last.classList.add('col-md-6');
pSmall.classList.add('small-text');


//Конец

// add attr
row.setAttribute('id', 'main-image-container');
mainImg.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg');
mainImg.setAttribute('alt', 'No images');
mainImgs.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg');
mainImgs.setAttribute('alt', 'No images');

citeFooterFirst.setAttribute('title', 'Source Title');
//add text
const textDeadpool = 'DEADPOOL';
const pText = 'WITH GREAT POWER COMES GREAT';
const tribute = ' TRIBUTE PAGE';
const irres = ' IRRESPONSIBILITY';
const rowSubTitleText = 'TIMELINE';
const h1SubtitleText = 'QUOTE';
const pFooterText = 'MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.';
const citeText = 'Someone with a great ass';
const pTextFooter = 'All rights and lefts reserved.\n';

span.insertAdjacentHTML('afterbegin', textDeadpool);
h1.insertAdjacentHTML('afterbegin', tribute);
p.insertAdjacentHTML('afterbegin', irres);
irresponsibilitySpan.insertAdjacentHTML('afterbegin', pText);
h1SubTitleLast.insertAdjacentHTML('afterbegin', h1SubtitleText);


h1SubTitle.insertAdjacentHTML('afterbegin', rowSubTitleText);
pFooter.insertAdjacentHTML('afterbegin', pFooterText);
citeFooterFirst.insertAdjacentHTML('afterbegin', citeText);
pSmall.insertAdjacentHTML('afterbegin', pTextFooter);

// console.log(span);

//paste
jumbotron.insertAdjacentElement('afterbegin', titleContainer);
titleContainer.insertAdjacentElement('afterbegin', h1);
h1.insertAdjacentElement('afterbegin', span);
h1.insertAdjacentElement('afterend', p);
p.insertAdjacentElement('afterbegin', irresponsibilitySpan);

jumbotron.append(row);
row.append(mainImg);
jumbotron.append(rowSubTitle);
rowSubTitle.append(h1SubTitle);

jumbotron.append(rowListContainer);

rowListContainer.append(ulListContainer);

const massListTextFirst = ['SOME YEAR',
    'SOME YEAR',
    'SOME OTHER YEAR',
    'SOME OTHER DIFERENT YEAR',
    'YET ANOTHER YEAR',
    'YESTERDAY?',
    'NO...',
    'WHO CARES?',
    'DUNNO',
    'MEEH',
    '????',
    '@$%^#',

];
const liListText = ['- BORN IN CANADA AS WADE WILSON.',
    '- HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.',
    '- WADE BEGAN HIS MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.',
    '- IN AMERICA, HE MET AND FELL IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.',
    '- LEARNING THAT HE HAD CONTRACTED CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.',
    '- IN PURSUE OF HOPE FOR HIS TERMINAL CONDITION, HE JOINS THE WEAPON X PROGRAM',
    '- HIS CANCER WAS TEMPORARILY ARRESTED VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE',
    '- DURING ONE MISSION, WILSON KILLED HIS TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.',
    '- IN THE HOSPICE HE WAS TORTURED BY THE DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR DEAD',
    '- FOLLOWING HIS ESCAPE HE SOON RETURNED TO HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL',
    '- WHY DO YOU KEEP READING, THIS IS SO BORING...'];
const frag = document.createDocumentFragment();
for (let i = 0; i < liListText.length; i++) {
    const liCreate = document.createElement('li');
    liCreate.classList.add('list-item');
    liCreate.innerHTML = `<span class="red-text">${massListTextFirst[i]}</span> ${liListText[i]}`;
    frag.append(liCreate);

}
ulListContainer.append(frag);

const clone = row.cloneNode(false);

jumbotron.append(clone);
clone.append(mainImgs);

const cloneLast = rowSubTitle.cloneNode(false);
jumbotron.append(cloneLast);

cloneLast.append(h1SubTitleLast);


jumbotron.append(rowFooter);
rowFooter.append(colLs6);
colLs6.append(blockquote);
blockquote.append(pFooter);
blockquote.append(firstFooter);
firstFooter.append(citeFooterFirst);


// Инициализация второго дива
jumbotron.append(rowFooterLast);
rowFooterLast.append(colMd6);
rowFooterLast.append(colMd6Last);
colMd6.append(pSmall);
colMd6Last.append(ulFooter);


mass = ['Made as a <a href="https://www.freecodecamp.com/" target="_blank">CodeCamp</a> project',
    '<a href="http://www.foxmovies.com/movies/deadpool" target="_blank">Assets and idea</a>',
    '<a href="http://marvel.com/universe/Deadpool_(Wade_Wilson)" target="_blank">Info</a>',
    '<a href="https://twitter.com/deadpoolmovie" target="_blank">The best twitter ever</a>'
];
for (let i = 0; i < mass.length; i++){
    const liiii = document.createElement('li');
    liiii.innerHTML = mass[i];
    ulFooter.append(liiii);
};





// const rowFooterLast = document.createElement('div');
// const colMd6 = document.createElement('div');
// const pSmall = document.createElement('p');
// const colMd6Last = document.createElement('div');
// const ulFooter = document.createElement('ul');


// const colLs6 = document.createElement('div');
// const blockquote = document.createElement('blockquote');
// const pFooter = document.createElement('p');
// const firstFooter = document.createElement('footer');
// const citeFooterFirst = document.createElement('cite');

// ulListContainer.append(frag);
// h1.insertAdjacentElement('afterend', p);
// p.insertAdjacentElement('afterbegin', span);