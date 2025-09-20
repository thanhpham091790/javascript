

// Function Declarations
function myFunction1(a, b) {
    return a * b;
}
console.log(myFunction1(3, 4));

// Function Expressions
const myVariable1 = function (a, b) { return a * b };
console.log(myVariable1(3, 4));

// Anonymous self-invoking function
(
    function () {
        console.log("Hello world!");
    }
)();

// Functions are objects
function myFunction2(a, b) {
    return arguments.length;
}
console.log(typeof myFunction2); // typeof return function
console.log(myFunction2(3, 4, 5, 6)); // arguments.length return number of arguments.
console.log(myFunction2.toString()); // toString() return function as a string.

