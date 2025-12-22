
const ctx = document.querySelector('#myChart');

const xValues = [];
const yValues = [];

generateData('Math.sin(x)', 0, 10, 0.5);

function generateData(func, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
        xValues.push(x);
        yValues.push(eval(func));
    }
}

new Chart(ctx, {
    type: 'line',
    data: {
        labels: xValues,
        datasets: [{
            label: 'y = sin(x)',
            data: yValues,
            borderColor: 'rgba(0,0,255,0.5)',
            pointRadius: 1,
            tension: 0.4
        }]
    },
    options: {
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'y = sin(x)',
                font: { size: 16 }
            },
        },
        scales: {
            x: { title: { display: true, text: 'x' } },
            y: {
                title: { display: true, text: 'sin(x)' }
            }
        }

    }
});
