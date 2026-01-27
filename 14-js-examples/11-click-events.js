const para = document.querySelector('#para');
const demo = document.querySelector('#demo');

para.addEventListener('dblclick', onClickHandler);

function onClickHandler() {
    demo.innerHTML = 'Hello World!';
}