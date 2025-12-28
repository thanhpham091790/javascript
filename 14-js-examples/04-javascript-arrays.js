
const demo = document.querySelector('#demo');

const numbers = [45, 4, 9, 19, 25];

let someOver18 = numbers.some(function (number) {
    return number > 18;
});

demo.innerHTML = `All over 18 is ${someOver18}`;