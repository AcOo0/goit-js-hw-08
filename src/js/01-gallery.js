// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line


const list = document.querySelector('.gallery');

list.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

let lightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay: 250,    
});

function createMarkup(arr) { 
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>
</li>
    `)
        .join('');
};