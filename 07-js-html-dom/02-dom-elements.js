
// Finding HTML elements by tag name.
const elements = document.getElementsByTagName('p');
console.log(elements);
document.getElementById('demo').innerHTML =
    'The text in first paragraph (index 0) is: ' + elements.namedItem('para1').innerHTML +
    ' The text in second paragraph (index 1) is: ' + elements.namedItem('para2').innerHTML;

const elementArray = Array.from(elements);
console.log(elementArray[0].innerHTML);
