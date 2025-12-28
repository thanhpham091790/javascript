
const demo = document.querySelector('#demo');

const numbers = [45, 4, 9, 16, 25];
const numbers2 = numbers.map(function (number) {
    return number * 2;
});

demo.innerHTML = numbers2;