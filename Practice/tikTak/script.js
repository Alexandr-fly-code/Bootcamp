// const deadline = new Date('1, january, 2019');
// const deadlineUpdate = new Date(2019, 0, 1, 0, 0, 0);
//
// // console.log(deadlineUpdate);
// const seconds = document.querySelector('.seconds');
// const minutes = document.querySelector('.minutes');
//
// const hourse = document.querySelector('.hours');
//
// const dayse = document.querySelector('.days');
//
// function timer() {
//     const today = new Date();
//     const res = deadlineUpdate - today;
//     let sec = Math.floor(res / 1000);
//     let min = sec / 60;
//     let hours = min / 60;
//     let days = hours / 24;
//     sec = Math.floor(sec % 60);
//     if (sec % 60 < 10){
//         seconds.textContent = `0${Math.floor(sec % 60)}`
//     }else {
//         seconds.textContent = Math.floor(sec % 60);
//     }
//     min = Math.floor(min % 60);
//     hours = Math.floor(hours % 24);
//     days = Math.floor(days);
//     // seconds.textContent = sec;
//     minutes.textContent = min;
//     hourse.textContent = hours;
//     dayse.textContent = days;
//     // console.log(sec);
//     // console.log(`${min} ${hours} ${days}`);
//     // console.log(res % 60);
//     // console.log(min);
//     // console.log(sec);
//     // console.log(res/1000/60/60/24);
//     // console.log(res);
// };
//
// setInterval(timer, 1000);

//
// const promiseNames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve(['Homer', 'Bender', 'Filip']);
// }, 2000);
//
// setTimeout(() => {
//     reject("no data back from server, there was an error")
// }, 3000);
// });
//
// promiseNames
//     .then(answer => {
//        return answer.map(el => el.toUpperCase())
//     })
//     .then(result => {
//         for (let el of result){
//     console.log(el);
// }
// })
// .catch(error => console.log(error))


// const promise = new Promise((trues, falses) => {
//    const user = true;
//     if (user){
//         trues(`hello user`);
//     }
//     if (user === false){
//         falses(`error`);
//     }
// });
//
// promise.then(users => {return users + 10})
// .then(el => console.log(el))
// .catch(er => console.log(er));

const promise = new Promise((el, notEl) => {
   el(true);
   notEl(true)
});


promise.then(el => console.log(el))
.catch(er => console.log(er))