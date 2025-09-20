// Function rest parameter
function myFunction1(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

function myFunction2() {
    console.log(arguments);
    let sum = 0;
    for (const key in arguments) {
        sum += arguments[key]
    }
    return sum;
}


console.log(myFunction1(2, 3, 4, 5), myFunction2(1, 2, 3, 4, 5));