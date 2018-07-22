// fetch('https://test-users-api.herokuapp.com/users', {
//     method: 'POST',
//     body: JSON.stringify({ name: "NEW", age: 12}),
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     }
// })
// .then(el => console.log(el))
const users = 'https://test-users-api.herokuapp.com/users/';
const getId = 'https://test-users-api.herokuapp.com/users/';
//
// fetch('https://test-users-api.herokuapp.com/users', {
//     method: 'POST',
//     body: JSON.stringify({ name: "NEW", age: 13}),
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     }
// })
//     .then(el => {
//         if (el.ok){
//             return el.json()
//         }
//     })
//     .then(el => console.log(el.data))


// fetch('https://test-users-api.herokuapp.com/users', {
//     method: 'DELETE',
//     body: JSON.stringify({ name: "NEW", age: 13}),
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     }
// })
//     .then(el => {
//         if (el.ok){
//             return el.json()
//         }
//     })
//     .then(el => console.log(el.data))


// fetch('https://test-users-api.herokuapp.com/users', {
//     method: 'DELETE'
// }).then(() => console.log('success'))
//     .catch(error => console.log('ERROR' + error));
//

//Начало

function getAllUsers() {
    fetch(users)
        .then(user => {
            if (user.ok) {
                return user.json()
            }
        })
        .then(el => {
            console.log(el.data)
        })
}

//

//Получить ID
// const searchInId = prompt('Введите id');
const idSearch = document.querySelector('.id-search');

function getUserById(id) {
    fetch(users)
        .then(user => {
            if (user.ok) {
                return user.json()
            }
        })
        .then(el => el.data)
        .then(el => el.find(item => item.id === idSearch.value))
        .then(el => console.log(el));
    // return id.find(item => item.id === searchInId);
}
//
// getUserById();
// //------------------------------------------------
//
//
// //Начало
function addUser(name, age) {
    const obj = {
        name: name,
        age: age,
    };
    // return obj;
    fetch(users, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(el => {
            if (el.ok) {
                return el.json()
            }
        })
        .then(el => console.log(el.data));

    return obj;
}

//
// //------------------------------------------------
//
//
// // function removeUser(id) {
// //
// // }
// const userDelete = prompt('Введите id для удаления с бд')



function deletedUser(deleted) {
    fetch(`https://test-users-api.herokuapp.com/users/${deleted}`, {
        method: 'DELETE'
    }).then(() => console.log('success'))
        .catch(error => console.log('ERROR' + error));
}
//Конец
//
// const id = 12;
// fetch(`https://test-users-api.herokuapp.com/users/${searchInId}`)
//     .then(el => {
//         if (el.ok) {
//             return el.json()
//         }
//     })
//     .then(el => console.log(el))

// addUser(name, age



function userUpdates(name, age) {
    const postToUpdate = {
        name: name,
        age: age,
    };
    fetch(`https://test-users-api.herokuapp.com/users/${getIdUpdate.value}`, {
        method: 'PUT',
        body: JSON.stringify(postToUpdate),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('ERROR' + error));
}

// const id = document.querySelector('#author');

// const idUsers = document.querySelector('#comment');
// console.log(idUsers);

//Кнопка для получения всего списка users
const btn = document.querySelector('.get-users');
btn.addEventListener('click', function () {
    getAllUsers()
});

//---------------------------------------

//Кнопка для получения ID USERS
const btnGetId = document.querySelector('.get-id');
btnGetId.addEventListener('click', function () {
    getUserById(idSearch.value);
});

//--------------------------------------


//Кнопка для добавления нового USER
const newName = document.querySelector('.new-name');
const newAge = document.querySelector('.new-age');
const btnAddUser = document.querySelector('.add-user');

btnAddUser.addEventListener('click', function () {
    addUser(newName.value, newAge.value);
});

//--------------------------------------

//Кнопка для удаления user по id
const deleted = document.querySelector('.delete');
const deletedUsers = document.querySelector('.deleted-user');

deletedUsers.addEventListener('click', function () {
    deletedUser(deleted.value);
});

//--------------------------------------

//Кнопка для обновление данных
const getIdUpdate = document.querySelector('.get-id-update');
const updateName = document.querySelector('.update-name');
const updateAge = document.querySelector('.update-age');
const btnUpdateUser = document.querySelector('.update-user');

btnUpdateUser.addEventListener('click', function () {
    userUpdates(updateName.value, updateAge.value);
});

//--------------------------------------