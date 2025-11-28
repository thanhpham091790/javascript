const demoEl = document.querySelector('#demo');
localStorage.setItem('name', 'Thanh Pham');
demoEl.innerHTML = localStorage.getItem('name');
