const p = document.querySelector('p');

p.addEventListener('mousedown', onMousedownHandler);
p.addEventListener('mouseup', onMouseupHandler);


function onMousedownHandler(event) {
    event.target.style.color = 'red';
}

function onMouseupHandler(event) {
    event.target.style.color = 'green';
}