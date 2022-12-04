import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

makeGallery();

function makeGallery() {
  const images = galleryItems
    .map(
      (item) => `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`
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
  const instance = new SimpleLightbox(".gallery a", {
    captions: true,
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
    captionDelay: 250,
  });
  instance.open();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") instance.close();
  });
}
