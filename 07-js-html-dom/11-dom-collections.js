// The HTMLCollection Object.
const pCollection = document.getElementsByTagName('p');
console.log(pCollection.length);
for (let i = 0; i < pCollection.length; i++) {
    pCollection[i].style.color = 'red';
}