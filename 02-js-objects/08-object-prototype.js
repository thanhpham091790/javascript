const demoEl = document.querySelector('#demo');

// Using the prototype property
function Person1(first, last, age, eyercolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyercolor = eyercolor;
}
Person1.prototype.nationality = 'Vietnam';
Person1.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

const thanh = new Person1('Thanh', 'Pham', 35, 'brown');
demoEl.innerHTML = `${thanh.fullName()} is from ${thanh.nationality}`;
