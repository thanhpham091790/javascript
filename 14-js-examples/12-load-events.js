
const img = document.querySelector('img');

img.addEventListener('load', onLoadHandler);

function onLoadHandler() {
    console.log('Image is loaded!');
}