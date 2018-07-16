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
const getId = 'https://test-users-api.herokuapp.com/users/:id';
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
        .then(el => console.log(el.data))
    // .catch(er => console.log(er))
}

getAllUsers();

const searchInId = prompt('Введите id');

//Получить ID

function getUserById(id) {
    fetch(users)
        .then(user => {
            if (user.ok) {
                return user.json()
            }
        })
        .then(el => el.data)
        .then(el => el.find(item => item.id === searchInId))
        .then(el => console.log(el));
    // return id.find(item => item.id === searchInId);
}

getUserById(searchInId);
//------------------------------------------------


//Начало
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

// addUser('ale', 12);

//------------------------------------------------


// function removeUser(id) {
//
// }


// fetch('https://test-users-api.herokuapp.com/users/:id=5b486de33989a30014ba42c5', {
//     method: 'DELETE'
// }).then(() => console.log('success'))
//     .catch(error => console.log('ERROR' + error));


//Конец
//
// const id = 12;
fetch(`https://test-users-api.herokuapp.com/users/:id`)
    .then(el => {
        if (el.ok) {
            return el.json()
        }
    })
    .then(el => console.log(el))

// addUser(name, age
