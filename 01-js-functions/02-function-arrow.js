// Before arrow
let myFunction1 = function (a, b) { return a * b };
let myFunction2 = function () { return "Hello world!" };
console.log(myFunction1(2, 3), myFunction2());

// With arrow
let myFunction3 = (a, b) => a * b;
let myFunction4 = () => "Hello world!";
console.log(myFunction3(3, 4), myFunction4());

// Arrow function with parameters
let myFunction5 = name => `Hello ${name}`;
let myFunction6 = (fname, lname) => `Hello ${fname} ${lname}`;
console.log(myFunction5('Thanh'), myFunction6('Thanh', 'Pham'));