import App from './components/app.js';

const root = document.querySelector("#app");
const app = new App();
root.appendChild(app.render());