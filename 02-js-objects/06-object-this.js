const demoEl = document.querySelector('#demo');
// this in a method
const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5566,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
demoEl.innerHTML = person1.fullName();
// Explicit function binding
const person2 = {
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

const person3 = {
    firstName: 'Thanh',
    lastName: 'Pham'
}

demoEl.innerHTML = `Hello, my name is ${person2.fullName.call(person3)}`