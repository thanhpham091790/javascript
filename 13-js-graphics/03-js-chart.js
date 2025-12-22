
const ctx = document.querySelector('#myChart');

const type = 'line';

const labels = [];
const data = [];

for (let i = 0; i <= 10; i += 0.5) {
    labels.push(i);
    data.push(i * 2 + 7);
}
const datasets = [
    {
        fill: false,
        pointRadius: 1,
        borderColor: "rgba(255,0,0,0.5)",
        data
    }
];
const legend = { display: false };
const title = {
    display: true,
    text: 'y = x * 2 + 7',
    font: { size: 16 }
};

const scales = {
    x: { title: { display: true, text: 'x' } },
    y: { title: { display: true, text: 'sin(x)' } }
}

new Chart(ctx, {
    type,
    data: {
        labels,
        datasets
    },
    options: {
        plugins: {
            legend,
            title,
            scales
        }
    }
});