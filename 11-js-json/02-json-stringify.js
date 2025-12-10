const demo = document.querySelector('#demo');
const myObj = {
    name: 'Thanh',
    age: 30,
    city: 'Littleton'
};
const myJSON = JSON.stringify(myObj);

demo.innerHTML = myJSON;