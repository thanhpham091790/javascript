
const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', function () {
    demo.innerHTML = getRandom(0, 10);
});

function getRandom(min, max, incl = true) {
    if (incl === true) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}