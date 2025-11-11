// The HTML DOM NodeList Object
const demoEl = document.querySelector('#demo');
const myNodeList = document.querySelectorAll('p');
console.log(myNodeList[0].childNodes[0]);

demoEl.innerHTML = 'The first paragraph is: ' + myNodeList[0].innerHTML;