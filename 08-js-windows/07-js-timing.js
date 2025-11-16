setInterval(() => {
    const d = new Date();
    document.querySelector('#demo').innerHTML = d.toLocaleTimeString();
}, 1000);