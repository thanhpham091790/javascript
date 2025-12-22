
const ctx = document.querySelector('#myChart');

const type = 'line';
const labels = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const fill = false;
const lineTension = 0;
const backgroundColor = "rgba(0,0,255,1.0)";
const borderColor = "rgba(0,0,255,0.1)";
const data = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

const legend = { display: false };
const title = {
    display: true,
    text: 'House Prices vs. Size',
    font: { size: 16 }
};

new Chart(ctx, {
    type,
    data: {
        labels,
        datasets: [{
            fill: false,
            lineTension,
            backgroundColor,
            borderColor,
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