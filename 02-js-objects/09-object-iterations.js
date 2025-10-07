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
let text3 = '';
for (let [key, value] of Object.entries(person3)) {
    text3 += key + ': ' + value + '\n';
}
console.log(text3);
const map3 = new Map(Object.entries(person3));
console.log(map3);
