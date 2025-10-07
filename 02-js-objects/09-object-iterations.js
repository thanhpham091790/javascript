// Javascript Object.assign()

const person1 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    age: 50,
    eyeColor: 'brown'
};

const person2 = {
    firstName: 'Anne',
    lastName: 'Smith'
};

Object.assign(person1, person2);
console.log(person1, person2);

// Javascript Object.entries()
const person3 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    age: 35,
    eyeColor: 'brown'
};
let text = '';
for (let [key, value] of Object.entries(person3)) {
    text += key + ': ' + value + '\n';
}
console.log(text);
