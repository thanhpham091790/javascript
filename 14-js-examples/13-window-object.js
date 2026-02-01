const input = document.querySelector('#scroll');

input.addEventListener('click', scrollHandler);

function scrollHandler() {
    window.scrollBy(0, 10);
}
