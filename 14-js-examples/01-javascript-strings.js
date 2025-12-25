
const demo = document.querySelector('#demo');

let text = "a,b,c,d,e,f";
const arr = text.split(',');
demo.innerHTML = arr[1];