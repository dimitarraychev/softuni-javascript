import { html, render } from "./node_modules/lit-html/lit-html.js";

const tbody = document.querySelector('tbody');

async function solve() {
	document.querySelector('#searchBtn').addEventListener('click', onClick);

	const data = await requester();
	createList(data);

	function createList(data, search) {
		if (search) search = search.toLowerCase();

		const list = html`${Object.values(data).map(e => html`
         <tr class=${e.firstName.toLowerCase().includes(search) || e.lastName.toLowerCase().includes(search) ||
				e.email.toLowerCase().includes(search) || e.course.toLowerCase().includes(search) ? 'select' : ''}>
            <td>${e.firstName} ${e.lastName}</td>
            <td>${e.email}</td>
            <td>${e.course}</td>
         </tr>`
		)}`;

		render(list, tbody);
	}

	function onClick() {
		const searchField = document.querySelector('#searchField');
		createList(data, searchField.value);
		searchField.value = '';
	}

	async function requester() {
		const URI = 'http://localhost:3030/jsonstore/advanced/table';

		try {
			const response = await fetch(URI);
			if (!response.ok) console.log(response.status);
			const data = await response.json();

			return data;
		} catch (error) {
			console.log(error);
		}
	}
}
solve();