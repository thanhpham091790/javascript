const button = document.querySelector('button');
const demo = document.querySelector('#demo');

button.addEventListener('click', myFunc);

function myFunc() {
    let text = demo.innerHTML;
    demo.innerHTML = text.replace("Microsoft", "W3Schools");
}