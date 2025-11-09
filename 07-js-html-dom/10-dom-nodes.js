// Creating new HTML elements (nodes)
const para = document.createElement('p');
const textNode = document.createTextNode('This is a new paragraph!');
para.appendChild(textNode);

const div = document.querySelector('#div1');
div.appendChild(para);