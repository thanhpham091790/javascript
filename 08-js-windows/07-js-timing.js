
const button = document.querySelector('button');

let time = setInterval(() => {
    const d = new Date();
    document.querySelector('#demo').innerHTML = d.toLocaleTimeString();
}, 1000);

button.addEventListener('click', () => {
    clearInterval(time);
});