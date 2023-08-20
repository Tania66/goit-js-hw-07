import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');


function createGalleryItems(items) {
    return items.map(({preview, original, description}) => {
  return ` 
   <li class="gallery__item">
      <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
       </a>
    </li>`}).join('');      

}


const galleryItemsList = createGalleryItems(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend' , galleryItemsList);



galleryContainer.addEventListener('click' , onGalleryContainerClick);

function onGalleryContainerClick(event) {  
    event.preventDefault();

    if (event.target.nodeName!=='IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()



galleryContainer.addEventListener("keydown", (event) => {

if (event.code === 'Escape') {
   instance.close();
    }
});

}