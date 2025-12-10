const demo = document.querySelector('#demo');
const jObject = '{"name":"John", "age":30, "city":"New York"}';
const jArray = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const object = JSON.parse(jObject);
const array = JSON.parse(jArray);
let content = `<h1>The list of cars: </h1>`;
for (const item of array) {
    content += `<p>${item}</p>`;
}
demo.innerHTML = content;