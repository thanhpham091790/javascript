const demo = document.querySelector('#demo');
const myArray = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(myArray);

demo.innerHTML = myJSON;