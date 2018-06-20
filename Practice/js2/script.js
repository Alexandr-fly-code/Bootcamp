
// const user = prompt('Введите пароль');

// // if (user === 'Червень' || user === 'Липень' || user === 'Серпень'){
// //     console.log(`ok`);
// // }
//
// switch (user) {
//     case 'червень':
//     case 'липень':
//     case 'травень':
//         console.log(`summer`);
//         break;
//     case 'декабрь':
//     case 'январь':
//     case 'февраль':
//         console.log(`winter`);
//         break;
//     default:
//         console.log(`Введите месяц года`);
// }

// const ADMIN_LOGIN = 'admin';
// const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
//
//
// if (user === null){
//     console.log(`Отменено пользователем!`);
//
// }else{
//     if (user !== ADMIN_LOGIN){
//         console.log(`Доступ запрещен!`);
//     } else {
//         const userPassword = prompt('Введите пароль')
//         if (userPassword !== ADMIN_PASSWORD){
//             console.log(`Доступ запрещен!`);
//         }else {
//             console.log(`Добро пожаловать!`);
//         }
//
//     }
// }

const sharm =  15;
const hurgada = 25;
const taba = 6;

const sharmText = 'sharm';
const hurgadaText = 'hurgada';
const tabaText = 'taba';

const user = +prompt('Введите число необходимых мест');
if (isNaN(user)){
    alert(`Ошибка ввода`);

}else {
    if (user <= taba){

        const ok = confirm(`Было найдено место в группе : ${tabaText}`);
                if (true){
                    console.log(`Приятного путешествия в группе ${tabaText}`);
                } else {
                    console.log(`Нам очень жаль, приходите еще!`);
                }

            }else if (user <= sharm){
                const ok = confirm(`Было найдено место в группе : ${sharmText}`);
                if (true){
                    console.log(`Приятного путешествия в группе ${sharmText}`);
                } else {
                    console.log(`Нам очень жаль, приходите еще!`);
                }

                }else if (user <= hurgada){
                const ok = confirm(`Было найдено место в группе : ${hurgadaText}`);
            if (true){
                console.log(`Приятного путешествия в группе ${hurgadaText}`);
            } else {
                console.log(`Нам очень жаль, приходите еще!`);
            }
    }




}
