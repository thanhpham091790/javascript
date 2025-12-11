const demo = document.querySelector('#demo');
const obj = { name: "John", age: function () { return 30; }, city: "New York" };
const json = JSON.stringify(obj);
demo.innerHTML = json;