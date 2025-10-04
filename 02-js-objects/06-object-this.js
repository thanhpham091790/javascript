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