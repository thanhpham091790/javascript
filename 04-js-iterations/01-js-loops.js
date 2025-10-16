// The for...in loop
const person1 = { fname: 'Thanh', lname: 'Pham', age: 35 };
let text = '';
for (let key in person1) {
    text += person1[key] + ' ';
}
console.log(text);

// The for...of loop
const persons = [
    { fname: 'Thanh', lname: 'Pham', age: 35 },
    { fname: 'Toan', lname: 'Pham', age: 30 },
    { fname: 'Tam', lname: 'Pham', age: 57 }
];

let firstNames = '';
for (let person of persons) {
    firstNames += person.fname + ' ';
}
console.log(firstNames);