const txt = document.querySelector('#txt');
window.addEventListener('load', startTime);


function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    txt.innerHTML = `${h} : ${m} : ${s}`;
    setTimeout(startTime, 1000);

    console.log(today);
}


function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}