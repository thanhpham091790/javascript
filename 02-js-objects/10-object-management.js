

// Adding a new Property
const person1 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    language: 'VN'
};
Object.defineProperty(person1, 'year', { value: '1990' });
console.log(person1);

// Changing a property value
const person2 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    language: 'VN'
};
Object.defineProperty(person2, 'language', { value: 'EN' });
console.log(person2);

// List all object properties
const person3 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    language: 'VN'
};
Object.defineProperty(person3, 'language', { enumerable: false });
const properties3 = Object.getOwnPropertyNames(person3);
console.log(properties3);

// List enumerable object properties
const person4 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    language: 'VN'
};
Object.defineProperty(person4, 'language', { enumerable: false });
const properties4 = Object.keys(person4);
console.log(properties4);

// Adding getters and setters
const person5 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    language: 'VN'
};
Object.defineProperty(person5, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    }
});
console.log(person5.fullName);