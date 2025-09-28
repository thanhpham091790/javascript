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