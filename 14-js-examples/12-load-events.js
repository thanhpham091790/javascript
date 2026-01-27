const demo = document.querySelector('#demo');

document.addEventListener('keyup', () => whichButtonCode(event));

function whichButtonCode(e) {
    demo.innerHTML = e.keyCode;
}