const demo = document.querySelector('#demo');
const button = document.querySelector('button');

var myTimer = setInterval(myClock, 1000);


function myClock() {
    demo.innerHTML = new Date().toLocaleTimeString();
}

button.addEventListener('click', () => clearInterval(myTimer));