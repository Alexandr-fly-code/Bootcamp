const body = document.querySelector('body');


const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];


function createPostCard(post) {

    const divPost = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const a = document.createElement('a');
    const images = document.createElement('img');

    divPost.classList.add('post');
    h2.classList.add('post__title');
    p.classList.add('post__text');
    a.classList.add('button');
    images.classList.add('post__image');

    images.setAttribute('src', post.img);
    a.setAttribute('href', '#');

    h2.textContent = post.title;
    p.textContent =  post.text;
    a.textContent =  post.link;


    body.append(divPost);
    divPost.append(images);
    divPost.append(h2);
    divPost.append(p);
    divPost.append(a);

};

function createCards(posts) {
    const mass2 = posts.map(function(elem){
        return createPostCard(elem);
})

};

createCards(posts);

//
// const divPost = document.createElement('div');
// const img = document.createElement('img');
// const h2 = document.createElement('h2');
// const p = document.createElement('p');
// const a = document.createElement('a');
//
//
// divPost.classList.add('post');
// img.classList.add('post__image');
// h2.classList.add('post__title');
// p.classList.add('post__text');
// a.classList.add('button');
//
// img.setAttribute('src', 'http://via.placeholder.com/400x150', 'alt', 'post image');
// a.setAttribute('href', '#');
//
// h2.textContent = 'Lorem ipsum dolor';
// p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
// a.textContent = 'Read more';
//
//
// body.prepend(divPost);
// divPost.append(img);
// divPost.append(h2);
// divPost.append(p);
// divPost.append(a);