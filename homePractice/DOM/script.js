const body = document.querySelector('body');
// console.log(body);

// function createHtml(elem, classAdd, text, mod, container) {
//     const el = document.createElement(elem);
//     for (let mass of classAdd){
//         el.classList.add(mass);
//         console.log(mass);
//     }
//
//     el.textContent = text;
//     container[mod](el);
//     return el;
// };
//
// // body.textContent
//
// const oneBlock = createHtml('div', ['row', 'span-m'], 'HTML', 'prepend', body);
// console.log(body);
// console.log(oneBlock);


// function createHtml({elem, classAdd, text, mod, container}) {
//     const el = document.createElement(elem);
//     el.classList.add(classAdd);
//     el.textContent = text;
//     container[mod](el);
//     return el;
// };
//
// // body.textContent
//
// const oneBlock = createHtml({
//     elem: 'div',
//     classAdd: 'row',
//     text: 'HTML',
//     mod: 'prepend',
//     container: body,
// });
// console.log(body);
// console.log(oneBlock);