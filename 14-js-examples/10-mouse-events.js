const coordiv = document.querySelector('#coordiv');
const demo = document.querySelector('#demo');

coordiv.addEventListener('mousemove', () => onMouseMoveHandler(event));
coordiv.addEventListener('mouseout', onMouseOutHandler);

function onMouseMoveHandler(e) {
    x = e.clientX;
    y = e.clientY;
    demo.innerHTML = `Coordinates: (${x}, ${y})`;
}

function onMouseOutHandler() {
    demo.innerHTML = '';
}