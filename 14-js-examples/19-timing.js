const demo = document.querySelector('#demo');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
var count = 0;

start.addEventListener('click', () => {
    myTimer = setInterval(myCounter, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(myTimer);
});

function myCounter() {
    demo.innerHTML = ++count;
}