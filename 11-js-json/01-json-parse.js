const demo = document.querySelector('#demo');
const json = '{"name":"John", "age":30, "city":"New York"}';
const object = JSON.parse(json);
demo.innerHTML = `His name is ${object.name}. He is ${object.age} years old. He is from ${object.city}.`;