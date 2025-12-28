
const demo = document.querySelector('#demo');

const numbers = [4, 9, 16, 25, 29];
let firstFound = numbers.find(function (value) {
    return value > 18;
});

demo.innerHTML = `The first value over 18 is ${firstFound}.`;