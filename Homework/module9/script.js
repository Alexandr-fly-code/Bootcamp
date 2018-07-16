const time = document.querySelector('.js-time');
const start = document.querySelector('.js-start');
const lap = document.querySelector('.js-take-lap');
const reset = document.querySelector('.js-reset');

//
// function dates() {
//     let date = new Date();
//     let times = `00 : ${date.getSeconds()}: ${date.getMilliseconds()}`;
//     time.textContent = times;
//
// }
// const timerID = setInterval(() => {
//     let date = new Date();
//     let times = `00 : ${date.getSeconds()}: ${date.getMilliseconds()}`;
//     time.textContent = times;
// }, 1000);

function id(){
    if (true){
            let set = setInterval(() => {
            let date = new Date();
            let times = `00 : ${date.getSeconds()}: ${date.getMilliseconds()}`;
            time.textContent = times;
        }, 100);
    }else {
        clearInterval(set);

    }

}

// const fn = setInterval(() => {
//         let date = new Date();
//         let times = `00 : ${date.getSeconds()}: ${date.getMilliseconds()}`;
//         time.textContent = times;
// }, 100);


function clearDates() {
    clearInterval(id)
}


start.addEventListener('click', id);
lap.addEventListener('click', function () {
    id()
});




