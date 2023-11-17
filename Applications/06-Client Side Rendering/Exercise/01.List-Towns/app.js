import { html, render } from "./node_modules/lit-html/lit-html.js";

const form = document.querySelector('form');
const root = document.querySelector('#root');

form.addEventListener('submit', onSubmit);

function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(form);
    const towns = formData.get('towns');

    const townsArr = towns.split(', ');
    const list = createList(townsArr);

    render(list, root);
}

function createList(data) {
    return html`
    <ul>
        ${data.map(el => html`<li>${el}</li>`)}
    </ul>
    `
}