const demo = document.querySelector('#demo');


setTimeout(() => {
    myTimeout1();
}, 2000);

setTimeout(() => {
    myTimeout2();
}, 4000);

setTimeout(() => {
    myTimeout3();
}, 6000);


function myTimeout1() {
    demo.innerHTML = '2 seconds';
}

function myTimeout2() {
    demo.innerHTML = '4 seconds';
}

function myTimeout3() {
    demo.innerHTML = '6 seconds';
}