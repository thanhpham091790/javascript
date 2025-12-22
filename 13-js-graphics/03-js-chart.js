
const ctx = document.querySelector('#myChart');

const labels = ["Italy", "France", "Spain", "USA", "Argentina"];
const backgroundColor = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];
const data = [55, 49, 44, 24, 15];
const legend = { display: true };
const title = {
    display: true,
    text: 'World Wine Production 2018',
    font: { size: 16 }
};

new Chart(ctx, {
    type: 'pie',
    data: {
        labels,
        datasets: [{
            backgroundColor,
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