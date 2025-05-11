import App from './components/app.js';
import "./main.css";

const root = document.querySelector("#app");
const app = new App();
root.appendChild(app.render());