const heading = document.querySelector('#heading');

heading.addEventListener('mouseover', onMouseoverHandler);
heading.addEventListener('mouseout', onMouseoutHandler);


function onMouseoverHandler(event) {
    event.target.style.color = 'red';
}

function onMouseoutHandler(event) {
    event.target.style.color = 'green';
}