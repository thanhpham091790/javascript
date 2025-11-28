const result = document.querySelector('#result');
let worker;

document.addEventListener('click', clickHandler);

function clickHandler(event) {
    if (event.target.id === 'start') {
        startWorker();
    }

    if (event.target.id === 'stop') {
        stopWorker();
    }
}

function startWorker() {
    console.log('Starting...');
    if (typeof (worker) == 'undefined') {
        worker = new Worker('workers.js');
    }
    worker.onmessage = function (event) {
        result.innerHTML = event.data;
    }
}

function stopWorker() {
    console.log('Stopping...');
    worker.terminate();
    worker = undefined;
}