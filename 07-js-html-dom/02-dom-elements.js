const elements = document.querySelectorAll('p.intro');
console.log(elements);
document.querySelector('#demo').innerHTML =
    'The first paragraph with class="intro" is: ' + elements[0].innerHTML;
elements.forEach(function (node, index) {
    console.log(node, index);
});
console.log([...elements]);