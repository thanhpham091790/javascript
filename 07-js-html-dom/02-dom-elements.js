
// Finding HTML elements by tag name.
const elements = document.getElementsByTagName('p');
console.log(elements);
document.getElementById('demo').innerHTML =
    'The text in first paragraph (index 0) is: ' + elements.item(0).innerHTML +
    ' The text in second paragraph (index 1) is: ' + elements.item(1).innerHTML;



