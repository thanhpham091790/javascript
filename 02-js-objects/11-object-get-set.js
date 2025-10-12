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
