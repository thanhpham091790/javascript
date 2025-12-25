const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', myFunc);

function myFunc() {
    var str = "The rain in SPAIN stays mainly in the plain";
    var res = str.match(/ain/g);
    demo.innerHTML = res;
}