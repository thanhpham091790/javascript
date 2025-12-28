
const demo = document.querySelector('#demo');
const button = document.querySelector('button');

const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

displayCars();

function displayCars() {
    demo.innerHTML =
        cars[0].type + ' ' + cars[0].year + '<br>' +
        cars[1].type + ' ' + cars[1].year + '<br>' +
        cars[2].type + ' ' + cars[2].year;
}

button.addEventListener('click', sortObjectByNumber);

function sortObjectByNumber() {
    cars.sort(function (a, b) {
        let x = a.type.toLocaleLowerCase();
        let y = b.type.toLocaleLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
    displayCars();
}