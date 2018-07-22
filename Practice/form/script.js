let string = 'alexandr17world.com';

let stringPass = 'asdasd12312312dasdKdasdsa1232asd';

let regular = /\w{1,}\d{1,}\d\w{1,}\.(com|ua|net)/g

let regularPass = /\w{1,}\d{1,}\w{1,}/g;


console.log(regular.test(string));
console.log(string.match(regular));

console.log(stringPass.match(regularPass));

const mail = document.querySelector('#mail');
const pass = document.querySelector('#pass');

const btn = document.querySelector('button');

function mails() {
    console.log(mail.value);
    let resMail = mail.value;
    let resPass = pass.value;
    // regular.test(mail)
    if (regular.test(resMail)){
        console.log('ok')
    }else {
        console.log('Неверное введенная почта');
    }
    if (regularPass.test(resPass)){
        console.log('pass');
    }else {
        console.log('Неверно введенный пароль');
    }
}

btn.addEventListener('click', mails)