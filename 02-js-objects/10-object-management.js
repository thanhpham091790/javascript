

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
const properties = Object.getOwnPropertyNames(person3);
console.log(properties);