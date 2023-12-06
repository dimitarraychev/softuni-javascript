import { post } from "./requester.js";

let context;

//TODO add create HTML with @submit=${createOffer}
const createHTML = () => context.html``;

export function createView(ctx) {
	context = ctx;
	context.render(createHTML(), context.root);
}

async function createOffer(e) {
	e.preventDefault();

	//TODO change input variables
	const formData = new FormData(e.target);
	const { title, imageUrl, category, description, requirements, salary } = Object.fromEntries(formData);
	if (title.trim() == '') return;
	if (imageUrl.trim() == '') return;
	if (category.trim() == '') return;
	if (description.trim() == '') return;
	if (requirements.trim() == '') return;
	if (salary.trim() == '') return;

	await post('/data/offers', { title, imageUrl, category, description, requirements, salary }); //TODO check request
	context.redirect('/dashboard'); //TODO check redirect
}