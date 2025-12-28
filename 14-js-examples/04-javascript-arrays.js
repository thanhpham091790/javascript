console.log('connected!');

const button = document.querySelector('button');
const demo = document.querySelector('#demo');

const points = [40, 100, 1, 5, 25, 10];
demo.innerHTML = points;

button.addEventListener('click', randomOrder);

function randomOrder() {
    points.sort(function () { return 0.5 - Math.random() });
    demo.innerHTML = points;
}