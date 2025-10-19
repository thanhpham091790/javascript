const demoEl = document.querySelector('#demo');
// Javascript callbacks
function myDisplayer(something) {
    demoEl.innerHTML = something;
}

function myCalculator(num1, num2, callbacks) {
    let sum = num1 + num2;
    callbacks(sum);
}

myCalculator(1, 3, myDisplayer);