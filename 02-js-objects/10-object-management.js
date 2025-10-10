

// Adding a new Property
const person1 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    language: 'VN'
};
Object.defineProperty(person1, 'year', { value: '1990' });
console.log(person1);