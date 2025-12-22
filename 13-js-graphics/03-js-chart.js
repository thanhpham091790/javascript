const x = ["Italy", "France", "Spain", "USA", "Argentina"];
const y = [55, 49, 44, 24, 15];
const colors = ["red", "green", "blue", "orange", "brown"];

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