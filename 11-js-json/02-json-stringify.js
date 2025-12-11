const demo = document.querySelector('#demo');
const obj = { name: "John", age: function () { return 30; }, city: "New York" };
obj.age = obj.age.toString();
const json = JSON.stringify(obj);
demo.innerHTML = json;