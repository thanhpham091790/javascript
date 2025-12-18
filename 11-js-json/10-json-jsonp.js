const demo = document.querySelector('#demo');
function myFunc(obj) {
    demo.innerHTML = `My name is ${obj.name}, ${obj.age} years old, and I live in ${obj.city} city.`;
}