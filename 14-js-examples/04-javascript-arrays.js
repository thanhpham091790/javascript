
const demo = document.querySelector('#demo');

const numbers = [45, 4, 9, 19, 25];
const over18 = numbers.filter(function (value) {
    return value > 18;
});

demo.innerHTML = over18;