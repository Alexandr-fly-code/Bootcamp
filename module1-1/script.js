const  user = prompt('Введите логин')





const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';


if (user === null){
    alert(`Отменено пользователем!`);
}else{
    if (user !== ADMIN_LOGIN){
        alert(`Доступ запрещен!`);
    } else {
        const userPassword = prompt('Введите пароль')
        if (userPassword !== ADMIN_PASSWORD){
            alert(`Доступ запрещен!`);
        }else {
            alert(`Добро пожаловать!`);
        }

    }
}