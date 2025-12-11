const demo = document.querySelector('#demo');

// Storing data:
const myObject = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObject);
localStorage.setItem('myJSON', myJSON);

// Retrieving data:
const json = localStorage.getItem('myJSON');
const object = JSON.parse(json);
demo.innerHTML = `Hello, my name is ${object.name}`;
