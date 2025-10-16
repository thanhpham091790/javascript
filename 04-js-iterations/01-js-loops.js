// The for...in loop
const person1 = { fname: 'Thanh', lname: 'Pham', age: 35 };
let text = '';
for (let key in person1) {
    text += person1[key] + ' ';
}
console.log(text);