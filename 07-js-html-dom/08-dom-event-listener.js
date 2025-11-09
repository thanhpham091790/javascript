const myBtn = document.querySelector('#myBtn');
const myDiv = document.querySelector('#myDiv');
const demoEl = document.querySelector('#demo');

myDiv.addEventListener('mouseover', mouseOverHandler);

function mouseOverHandler() {
    demoEl.innerHTML = Math.random();
}

myBtn.addEventListener('click', btnClickHandler);

function btnClickHandler() {
    myDiv.removeEventListener('mouseover', mouseOverHandler);
}