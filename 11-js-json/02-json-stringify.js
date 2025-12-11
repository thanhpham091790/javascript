const demo = document.querySelector('#demo');

const obj = { name: "John", today: new Date(), city: "New York" };
const json = JSON.stringify(obj);
demo.innerHTML = json;