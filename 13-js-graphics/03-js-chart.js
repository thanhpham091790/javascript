const labels = ["Italy", "France", "Spain", "USA", "Argentina"];
const data = [55, 49, 44, 24, 15];
const colors = ["red", "green", "blue", "orange", "brown"];

const ctx = document.querySelector('#myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels,
        datasets: [{
            backgroundColor: colors,
            data
        }]
    },
    options: {
        indexAxis: 'y',
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