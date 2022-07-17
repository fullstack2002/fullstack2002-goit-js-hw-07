import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgs = {
	gallery: document.querySelector(".gallery"),
};
imgs.gallery.addEventListener("click", clickHandler);

function clickHandler(e) {
	e.preventDefault();
	if (e.target.nodeName !== "IMG") return;

	const instance = basicLightbox.create(
		`<img src="${e.target.dataset.source}">`
	);
	instance.show();
}
createImageGallery();

function createImageGallery() {
	const newGalleryItems = galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
      </a>
      </div>`;
		})
		.join("");

	imgs.gallery.insertAdjacentHTML("afterbegin", newGalleryItems);
}