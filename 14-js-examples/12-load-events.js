const demo = document.querySelector('#demo');
const para = document.querySelector('#para');

para.addEventListener('mousedown', () => showCoords(event));

function showCoords(e) {
    demo.innerHTML = `X = ${e.screenX}. Y = ${e.screenY}`;
}