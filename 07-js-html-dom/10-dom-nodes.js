// Removing a child node

const div1 = document.querySelector('#div1');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');

const newPara = document.createElement('p');
const textNode = document.createTextNode('This is a new paragraph!');
newPara.appendChild(textNode);

div1.insertBefore(newPara, p2);
div1.removeChild(p2);