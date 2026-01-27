const demo = document.querySelector('#demo');
const para = document.querySelector('#para');

para.addEventListener('mousedown', () => showCoords(event));

function showCoords(e) {
    demo.innerHTML = `X = ${e.clientX}. Y = ${e.clientY}`;
}