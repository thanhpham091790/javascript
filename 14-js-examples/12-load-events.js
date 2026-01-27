
const img = document.querySelector('img');

img.addEventListener('error', onErrorHandler);

function onErrorHandler() {
    console.log('Image could not be loaded!');
}