const demoEl = document.querySelector('#demo');

// Waithing for a Timeout
setTimeout(myFunction1, 2000);
function myFunction1() {
    demoEl.innerHTML = 'I love you!';
}

// Waiting for intervals
setInterval(myFunction2, 4000);
function myFunction2() {
    let d = new Date();
    demoEl.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
