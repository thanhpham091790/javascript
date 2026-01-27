const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', onClickHandler);

function onClickHandler() {
    demo.innerHTML = Date();
}