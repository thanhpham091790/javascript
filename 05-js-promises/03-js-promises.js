const demoEl = document.querySelector('#demo');

function myDisplayer(something) {
    demoEl.innerHTML = something;
}

let myPromise1 = new Promise(function (myResolve, myReject) {
    let x = 0;
    if (x == 0) {
        myResolve('OK');
    } else {
        myReject('Error');
    }
});

myPromise1.then(
    function (value) {
        myDisplayer(value);
    },
    function (error) {
        myDisplayer(error);
    }
);

// Waiting for a timeout
setTimeout(function () { myFunction1('I love you!'); }, 3000);
function myFunction1(text) {
    demoEl.innerHTML = text;
}

let myPromise2 = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
        myResolve('I love you too!');
    }, 4000);
});

myPromise2.then(function (text) {
    demoEl.innerHTML = text;
});