const demo = document.querySelector('#demo');
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => sendRequest(xhr));
xhr.open('GET', 'json_demo.txt', true);
xhr.send();

function sendRequest(xhr) {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const json = xhr.response;
        const obj = JSON.parse(json);
        renderResponse(obj);
    }
}

function renderResponse(obj) {
    if (Object.hasOwn(obj, 'pets')) {
        const pets = obj.pets;
        console.log(pets);
        let res = ``;
        for (const pet of pets) {
            res += `<p><b>${pet.animal.charAt(0).toUpperCase() + pet.animal.slice(1)}</b> : ${pet.name}</p>`;
        }
        demo.innerHTML = res;
    }
}