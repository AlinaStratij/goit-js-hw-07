import { galleryItems } from './gallery-items.js';
console.log(galleryItems);


const galleryEl = document.querySelector(`.gallery`);

// Change code below this line
function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`;
    })
    .join("");
}
const createGallery = createGalleryItem(galleryItems);
console.log(createGallery);

galleryEl.insertAdjacentHTML(`beforeend`, createGallery);



var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: `bottom`,
  captionDelay:250
});

