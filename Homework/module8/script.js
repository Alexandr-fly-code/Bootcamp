const galleryItems = [
    { preview: 'https://placeimg.com/220/220/any', fullview: 'https://placeimg.com/1400/400/any', alt: "alt text 1" },
    { preview: 'https://placeimg.com/220/220/animals', fullview: 'https://placeimg.com/1400/400/animals', alt: "alt text 2" },
    { preview: 'https://placeimg.com/220/220/arch', fullview: 'https://placeimg.com/1400/400/arch', alt: "alt text 3" },
    { preview: 'https://placeimg.com/220/220/nature', fullview: 'https://placeimg.com/1400/400/nature', alt: "alt text 4" },
    { preview: 'https://placeimg.com/220/220/people', fullview: 'https://placeimg.com/1400/400/people', alt: "alt text 5" },
    { preview: 'https://placeimg.com/220/220/tech', fullview: 'https://placeimg.com/1400/400/tech/tech', alt: "alt text 6" },
];


const jsImageGallery = document.querySelector('.js-image-gallery');

const previews = document.querySelector('.preview');

const fullviews = document.querySelector('.fullview');


function yep(mass) {
    const img = document.createElement('img');
    img.classList.add('any');
    img.setAttribute('src', mass[0].fullview);
    fullviews.append(img);
}

function fullview() {
    const img = document.createElement('img');
    img.classList.add('any');
    img.setAttribute('src', event.target.dataset.fullviewq);
    console.log(event.target);
    fullviews.append(img);
}

function preview(massPreview) {
    const frag = document.createDocumentFragment();
    for (let el of massPreview){
        const img = document.createElement('img');
        img.classList.add('other');
        img.setAttribute('src', el.preview);
        img.setAttribute('data-fullviewq', el.fullview);

        frag.append(img);
    }
    previews.append(frag);
};

preview(galleryItems);



jsImageGallery.addEventListener('click', function () {
    fullview();
});

document.addEventListener('DOMContentLoaded', function () {
    yep(galleryItems)
});