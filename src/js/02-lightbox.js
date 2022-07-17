import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgs = {
	gallery: document.querySelector(".gallery"),
};

imgs.gallery.addEventListener("click", clickHandler);

function clickHandler(e) {
	e.preventDefault();
	if (e.target.nodeName !== "IMG") return;

	const lightbox = new SimpleLightbox(".gallery a", {
		captionsData: "alt",
		captionDelay: 250,
	});
}

createImageGallery();

function createImageGallery() {
	const newGalleryItems = galleryItems
          .map(({ preview, original, description }) => {
              return `<a class="gallery__item" href="${original}">
      <img class="gallery__image"
        src="${preview}"
        alt="${description}"/>
      </a>`;
		        })
		        .join("");

	imgs.gallery.insertAdjacentHTML("afterbegin", newGalleryItems);
}