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

// Javasscript object.fromEntries()
const fruits4 = [
    ['apples', 300],
    ['pears', 900],
    ['bananas', 500]
];
const myObject4 = Object.fromEntries(fruits4);
console.log(myObject4);

// Javascript Object.values()
const person5 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    age: 35,
    eyeColor: 'brown'
};

let values5 = Object.values(person5);
console.log(values5);

// Javascript Object.groupBy()
const fruits6 = [
    { name: 'apples', quantity: 300 },
    { name: 'bananas', quantity: 500 },
    { name: 'oranges', quantity: 200 },
    { name: 'kiwi', quantity: 150 }
];

function myCallback6({ quantity }) {
    return quantity > 200 ? 'oke' : 'low';
}

const result6 = Object.groupBy(fruits6, myCallback6);
console.log(result6);

// Javascript Object.keys()
const person7 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    age: 35,
    eyeColor: 'brown'
};
const keys7 = Object.keys(person7);
console.log(keys7);
