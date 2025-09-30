// Object constructor functions
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather = new Person('Tam', 'Pham', 60, 'brown');
document.querySelector('#demo').innerHTML = `My father is ${myFather.age} years old.`;