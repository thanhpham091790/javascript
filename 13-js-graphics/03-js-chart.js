
const ctx = document.querySelector('#myChart');

const type = 'scatter';
const pointRadius = 4;
const pointBackgroundColor = 'rgb(0,0,255)';
const data = [
    { x: 50, y: 7 },
    { x: 60, y: 8 },
    { x: 70, y: 8 },
    { x: 80, y: 9 },
    { x: 90, y: 9 },
    { x: 100, y: 9 },
    { x: 110, y: 10 },
    { x: 120, y: 11 },
    { x: 130, y: 14 },
    { x: 140, y: 14 },
    { x: 150, y: 15 }
];
const legend = { display: true };
const title = {
    display: true,
    text: 'House Prices vs. Size',
    font: { size: 16 }
};

new Chart(ctx, {
    type,
    data: {
        datasets: [{
            pointRadius,
            pointBackgroundColor,
            data
        }]
    },
    options: {
        plugins: {
            legend,
            title
        }
    }
});