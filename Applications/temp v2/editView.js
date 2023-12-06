import { get, put } from "./requester.js";

let context;

//TODO add edit HTML with @submit=${editOffer}
const editHTML = (data) => context.html``;

export async function editView(ctx) {
	context = ctx;

	const offerID = context.params.id;
	const data = await get(`/data/offers/${offerID}`); //TODO check request

	context.render(editHTML(data), context.root);
}

async function editOffer(e) {
	e.preventDefault();
	const id = context.params.id;

	//TODO change input variables
	const formData = new FormData(e.target);
	const { title, imageUrl, category, description, requirements, salary } = Object.fromEntries(formData);
	if (title.trim() == '') return;
	if (imageUrl.trim() == '') return;
	if (category.trim() == '') return;
	if (description.trim() == '') return;
	if (requirements.trim() == '') return;
	if (salary.trim() == '') return;

	await put(`/data/offers/${id}`, { title, imageUrl, category, description, requirements, salary }); //TODO check request
	context.redirect(`/details/${id}`); //TODO check redirect
}