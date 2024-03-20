import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryContainter = document.querySelector("ul.gallery");

function createGalleryItem(array) {
    return array 
    .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
        `;
    })
    .join("");
}

const photosMarkup = createGalleryItem(galleryItems);
galleryContainter.insertAdjacentHTML("beforeend", photosMarkup);

const galleryHandler = new SimpleLightbox(".gallery a", { 
    captionsData: "alt", 
    captionsDelay: 250 
});
galleryHandler.on("show.SimpleLightbox");