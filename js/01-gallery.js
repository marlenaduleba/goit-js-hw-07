import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

makeGallery();

function makeGallery() {
  const images = galleryItems
    .map(
      (item) => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
    )
    .join("");
  gallery.insertAdjacentHTML("afterbegin", images);
}

gallery.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img width="1400" height="900" src="${selectedImage}">
`);
  instance.show();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") instance.close();
  });
}
