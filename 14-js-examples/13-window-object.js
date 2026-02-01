const input = document.querySelector('#scroll');

input.addEventListener('click', scrollHandler);

function scrollHandler() {
    window.scrollTo(0, 100);
}
