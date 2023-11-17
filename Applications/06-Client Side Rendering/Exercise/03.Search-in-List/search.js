import { html, render } from './node_modules/lit-html/lit-html.js';

import { towns } from './towns.js';

const input = document.querySelector('input');
const btn = document.querySelector('button');
const townsRef = document.querySelector('#towns');
const result = document.querySelector('#result');

btn.addEventListener('click', search);

function addTowns() {

	const list = html`<ul>
		${towns.map(town => html`<li>${town}</li>`)}
	</ul>`;

	render(list, townsRef);
};

addTowns();

function search() {
	const currSearch = input.value;
	input.value = '';
	result.textContent = '';

	if (currSearch.trim() === '') return checkForMatches(false);

	const matches = checkForMatches(currSearch);
	if (matches > 0) {
		result.textContent = `${matches} matches found`;
	} else {
		result.textContent = `0 matches found`;
	}
}

function checkForMatches(searchFor) {
	const allItems = Array.from(townsRef.querySelectorAll('li'));
	let matches = 0;

	allItems.forEach(item => {
		if (item.textContent.includes(searchFor)) {
			item.classList.add('active');
			matches++;
		} else {
			item.classList.remove('active');
		}
	});

	return matches;
}