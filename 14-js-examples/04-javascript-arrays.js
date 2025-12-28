
const demo = document.querySelector('#demo');

const numbers = [45, 4, 9, 19, 25];

let allOver18 = numbers.every(function (number) {
    return number > 18;
});

demo.innerHTML = `All over 18 is ${allOver18}`;