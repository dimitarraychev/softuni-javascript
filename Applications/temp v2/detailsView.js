import { del, get } from "./requester.js";
import { getUserData } from "./util.js";

let context;

//TODO add details HTML with @click=${deleteOffer} for Delete button
const detailsHTML = (data, isOwner) => context.html``;

export async function detailsView(ctx) {
	context = ctx;
	const offerID = context.params.id;
	const data = await get(`/data/offers/${offerID}`); //TODO check request
	
	let isOwner;

	const userData = getUserData();
	if (userData) {
		isOwner = data._ownerId == userData._id;
	}

	// const userData = getUserData();
	// const isOwner = data._ownerId == userData._id;

	context.render(detailsHTML(data, isOwner), context.root);
}

//TODO attach function to delete button
async function deleteOffer(e) {
	const id = context.params.id;

	const confirm = window.confirm('Are you sure you want to delete this offer?'); //TODO check message
	if (confirm) {
		await del(`/data/offers/${id}`); //TODO check request
		context.redirect('/dashboard'); //TODO check redirect
	}
}