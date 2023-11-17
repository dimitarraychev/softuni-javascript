import { html, render } from "./node_modules/lit-html/lit-html.js";

const menu = document.querySelector('#menu');
const form = document.querySelector('form');

form.addEventListener('submit', addItem);

async function createOptions() {
    const data = await requester();
    const dataArr = Object.values(data);

    const options = html`${dataArr.map(data => html`<option value='${data._id}'>${data.text}</option>`)}`;
    render(options, menu);
}
createOptions();

function addItem(e) {
    e.preventDefault();
    const text = document.querySelector('#itemText');

    try {
        requester('POST', text.value);
        createOptions();
        form.reset();
    } catch (error) {
        console.log(error);
    }
}

async function requester(method, data) {
    const URI = 'http://localhost:3030/jsonstore/advanced/dropdown';

    const options = { method };
    if (method === 'POST') {
        options.headers = { 'Content-Type': 'application.json' };
        options.body = JSON.stringify({ text: data });
    }

    try {
        const response = await fetch(URI, options);
        if (!response.ok) console.log(response.status);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}