const x = ["Italy", "France", "Spain", "USA", "Argentina"];
const y = [55, 49, 44, 24, 15];
const colors = ["rgba(0,0,255,1.0)",
    "rgba(0,0,255,0.8)",
    "rgba(0,0,255,0.6)",
    "rgba(0,0,255,0.4)",
    "rgba(0,0,255,0.2)",];

const ctx = document.querySelector('#myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: x,
        datasets: [{
            backgroundColor: colors,
            data: y
        }]
    },
    options: {
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'World Wine Production 2018',
                font: { size: 16 }
            }
        }
    }
});