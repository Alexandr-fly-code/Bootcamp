// const title = document.createElement('h1');
// title.textContent = 'Title created from JS';
// title.classList.add('red');
//
// const div = document.querySelector('div');
// // div.appendChild(title);// Insert in container
// const article = document.querySelector('#title');
// const text= document.querySelector('.text');
// // div.insertBefore(title, article)


// div.append(title);
// div.prepend(title);//Начало

// article.after(title)// После чего вставить.
// text.before(title);//После чего вставить

// article.replaceWith(title) Замена


// ul.remove(); Удалить элемент

// article.replaceWith(ul)

const article = document.querySelector('.article');

const container = document.querySelector('#div');

const ul = document.querySelector('.list');

// container.textContent = 'Hello world';

// container.innerHTML += '<h1> Hello world <h1>';

// container.textContent = 'Text';

// const text = '<p>Text</p>'


// ul.insertAdjacentHTML('beforebegin', text);
// ul.insertAdjacentHTML('')

// const text = '<li>Hello World!</li>';
//
// const elem = document.createElement('p');
// elem.textContent = 'World'
// // ul.insertAdjacentHTML('beforebegin', text); // перед
// // ul.insertAdjacentHTML('afterend', text); // після
// // ul.insertAdjacentHTML('afterbegin', text); // всередині спочатку
// // ul.insertAdjacentHTML('beforeend', text); // всередині вкінці
// // ul.insertAdjacentElement()
// // ul.insertAdjacentElement('beforebegin', elem); // перед
// // ul.insertAdjacentElement('afterend', elem); // після
// // ul.insertAdjacentElement('afterbegin', elem); // всередині спочатку
// // ul.insertAdjacentElement('beforeend', elem); // всередині вкінці
//
// // const article = document.querySelector('.article');
//
// const clone = article.cloneNode(false) // false сам тег а true его наполнение(контент).
// console.log(clone);



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

const categories = document.querySelector('categories');

console.log(categories);