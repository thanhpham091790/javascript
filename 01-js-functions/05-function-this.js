// Function call() method
const person = {
    fullName: function (age) {
        return age == undefined ? `${this.firstName} ${this.lastName}` : `${this.firstName} ${this.lastName} is ${age} years old.`;
    },

    greeting: function () {
        return `Hello! My name is ${this.firstName} ${this.lastName}.`
    }
};
const person2 = {
    firstName: 'Thanh',
    lastName: 'Pham'
}
const person3 = {
    firstName: 'Toan',
    lastName: 'Pham'
}
console.log(person.fullName.call(person2));
console.log(person.fullName.call(person3));
console.log(person.fullName.call(person2, 35));
console.log(person.fullName.call(person3, 32));

// Function apply() method
// The different between call() and apply() method is: call() takes arguments separately by comma, and apply() takes arguments as an array.
const person4 = {
    firstName: 'Ngan',
    lastName: 'Do'
}
console.log(person.fullName.apply(person4));
console.log(person.fullName.apply(person4, [26]));

// Function blind method
const person5 = {
    firstName: 'Thuy',
    lastName: 'Tran'
}

console.log(person.fullName.bind(person5)());