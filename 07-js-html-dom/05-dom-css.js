const id1El = document.querySelector('#id1');
const btnEl = document.querySelector('#btn');

btnEl.addEventListener('click', () => {
    id1El.style.color = randomColor();
});

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green}, ${blue})`;
}