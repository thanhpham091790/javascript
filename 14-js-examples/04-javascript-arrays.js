
const demo = document.querySelector('#demo');

const numbers = [45, 4, 9, 19, 25];

let sum = numbers.reduce(function (total, value) {
    return total + value;
});

demo.innerHTML = sum;