const demo = document.querySelector('#demo');
const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(myJSON);
let text = ``;
for (const i in myObj.cars) {
    if (i == myObj.cars.length - 1) {
        text += myObj.cars[i] + '.';
    } else {
        text += myObj.cars[i] + ', '
    }
}
demo.innerHTML = text;