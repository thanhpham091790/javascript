const demoEl = document.querySelector('#demo');

// Async Syntax
async function myFunction1() {
    return 'Thanh Pham';
}

myFunction1().then(
    function (name) {
        demoEl.innerHTML = name;
    }
);

// Await Syntax
async function myDisplay1() {
    let myPromise1 = new Promise(function (myResolve) {
        myResolve('I love you!');
    });
    demoEl.innerHTML = await myPromise1;
}
myDisplay1();

async function myDisplay2() {
    const myPromise2 = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('I love you too!');
        }, 3000);
    });

    demoEl.innerHTML = await myPromise2;
}

myDisplay2();jav