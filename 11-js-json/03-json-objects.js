const demo = document.querySelector('#demo');
const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);
console.log(myObj);
for (const key in myObj) {
    demo.innerHTML += myObj[key] + '<br>';
}