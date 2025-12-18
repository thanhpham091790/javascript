const demo = document.querySelector('#demo');
const button = document.querySelector('button');

button.addEventListener('click', sendRequest);

function sendRequest() {
    let script = document.createElement('script');
    script.setAttribute('src', '10_demo_jsonp.php');
    document.body.appendChild(script);
}

function myFunc(obj) {
    demo.innerHTML = obj.name;
}