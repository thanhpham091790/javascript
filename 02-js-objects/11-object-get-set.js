const demoEl = document.querySelector('#demo');
// Javascript getter (the get keyword)
const person1 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    language: 'en',
    get lang() {
        return this.language;
    }
}
demoEl.innerHTML = person1.lang;

// Javascript setter (the set keyword)
const person2 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    language: 'en',
    set lang(lang) {
        this.language = lang;
    }
}
person2.lang = 'vn';
demoEl.innerHTML = person2.language;

// Javascript function or getter
const person3 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    language: 'en',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
demoEl.innerHTML = person3.fullName();

const person4 = {
    firstName: 'Thanh',
    lastName: 'Pham',
    language: 'en',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
demoEl.innerHTML = person4.fullName;