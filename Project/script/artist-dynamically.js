


// console.log(tops.topalbums.album);
//
// let arr = tops.topalbums.album.map(el => el.name);
//
// console.log(arr);
//    let res = [];
//    for (let i = 0; i < massName.length; i++){
//        // console.log(massName[i][i]);
//     res.push(massName[0][9]);
//        console.log(res);
//
//    }
// }
//
// for (let i = 0; i < data.results.artistmatches)

// for (let el of massName){
//     console.log(el[0].name);
// }
// console.log(massName);

//


(function () {
    const topArtists = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=66fe76bd2d42439b32aabf649e537b4d&format=json';

    fetch(topArtists)

        .then(response => response.json())
        .then(data => {
            console.log(data)
            info(data);
        })

    function info(elem) {
        const artistDynamically = document.querySelector('#artist-dynamically').innerHTML.trim();
        const content = document.querySelector('.content');
        const convert = Handlebars.compile(artistDynamically);
        console.log('elem', elem);
        const result = convert(elem.artists);
        console.log('result', result);
        content.innerHTML = result;
    }


})();


// console.log(top);
// console.log('ghfhjgf',result);