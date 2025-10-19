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

const myNumbers = [4, 1, -20, -7, 5, 9, -6];
const posNumbers = getPositiveNumbersFromArray(myNumbers, checkPosNumber);
demoEl.innerHTML = posNumbers;

function getPositiveNumbersFromArray(numberArray, callback) {
    const posArray = [];
    for (let num of numberArray) {
        if (callback(num)) {
            posArray.push(num);
        }
    }
    return posArray;
}

function checkPosNumber(number) {
    return number >= 0 ? true : false;
}