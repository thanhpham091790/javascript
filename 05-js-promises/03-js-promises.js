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