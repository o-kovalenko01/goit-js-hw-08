// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector('.gallery');

function createGalleryItem(item) {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}"  alt="${item.description}" />
            </a>
        </li>`;
}

galleryElement.innerHTML = galleryItems
  .map(item => createGalleryItem(item))
  .join('');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
