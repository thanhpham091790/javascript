
const demo = document.querySelector('#demo');

const numbers = [4, 19, 16, 25, 29];
let firstIndex = numbers.findIndex(function (value) {
    return value > 18;
});

demo.innerHTML = `The position that value over 18 is ${firstIndex + 1}.`;