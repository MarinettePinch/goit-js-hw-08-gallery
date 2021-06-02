// Создай галерею с возможностью клика по ее элементам 
// и просмотра полноразмерного изображения в модальном окне. 


// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

// Реализация делегирования на галерее ul.js-gallery 
// и получение url большого изображения.

// Открытие модального окна по клику на элементе галереи.

// Подмена значения атрибута src элемента img.lightbox__image.

// Закрытие модального окна по клику 
// на кнопку button[data-action="close-lightbox"].

// Очистка значения атрибута src элемента img.lightbox__image. 
// Это необходимо для того, чтобы при следующем 
// открытии модального окна, пока грузится изображение, мы не видели предыдущее.

import gallery from "./gallery-items.js";

console.log(gallery);

const refs = {
    ulGallery: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.js-lightbox'),
    lightboxImage: document.querySelector('.js-lightbox .lightbox__image'),
    lightboxCloseBtn: document.querySelector('.js-lightbox button[data-action="close-lightbox"]'),
};

// console.log(refs.ulGallery);
// console.log(refs.lightbox);
// console.log(refs.lightboxImage);
// console.log(refs.lightboxCloseBtn);

const makeItemsGallery = (({preview, original, description}) => {
    const item = document.createElement('li');
    item.classList.add("gallery__item");

    const link = document.createElement('a');
    link.classList.add("gallery__link");

    const image = document.createElement('img');
    image.setAttribute('src', preview);
    image.setAttribute('alt', description);
    image.classList.add("gallery__image");

    link.appendChild(image);
    item.appendChild(link);
    return item;
});

const itemsGallery = gallery.map(makeItemsGallery);

// console.log(...itemsGallery);

refs.ulGallery.append(...itemsGallery);