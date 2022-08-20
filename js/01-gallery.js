import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(`.gallery`);

function createGalleryItem(galleryItems){
 return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
   <img class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
    />
  </a>
</div>`
    }).join("");
}
const newGallery = createGalleryItem(galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, newGallery);
galleryContainer.addEventListener(`click`,onGalleryClick);
function onGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source}>
`);

  instance.show();
  document.addEventListener("keydown", onGalleryClose);
  function onGalleryClose(evt) {
    if (evt.code === "Escape") {
      instance.close();
    
    }
  }
}












