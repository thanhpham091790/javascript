// Accessing Object Methods
const person1 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    id: 1709,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person1.fullName());

// Adding a method to an Object
person1.name = function () {
    return `My name is ${person1.firstName} ${person1.lastName}.`;
}
console.log(person1.name());