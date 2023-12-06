import { get } from "./requester.js";

let context;

//TODO add dashboards HTML with posts mapped in it
const postTemplate = (data) => context.html``;

export function dashboardView(ctx) {
	context = ctx;

	//TODO add dashboard HTML without posts
	const dashboardHTML = context.html``;

	context.render(dashboardHTML, context.root);
	getData();
}

async function getData() {
	const URI = '/data/offers?sortBy=_createdOn%20desc'; //TODO change URI

	const data = await get(URI);
	if (data.length >= 1) {
		context.render(postTemplate(data), context.root);
	}
}