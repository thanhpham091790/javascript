
const demo = document.querySelector('#demo');

const numbers = [45, 4, 9, 16, 25];
let text = '';
numbers.forEach(function (value) {
    text += value + '<br>';
});

demo.innerHTML = text;