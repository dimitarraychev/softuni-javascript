import { get } from "./requester.js";

let context;

const postTemplate = (data) => context.html`
 	<h2>Fruits</h2>
        <section id="dashboard">
       ${data.map(el => context.html`
	   <div class="fruit">
            <img src=${el.imageUrl} alt="example1" />
            <h3 class="title">${el.name}</h3>
            <p class="description">${el.description}</p>
            <a class="details-btn" href="details/${el._id}">More Info</a>
        </div> 
	   `)}
        </section>
`;

export function dashboardView(ctx) {
	context = ctx;

	const dashboardHTML = context.html`<h2>No fruit info yet.</h2>`;

	context.render(dashboardHTML, context.root);
	getData();
}

async function getData() {
	const URI = '/data/fruits?sortBy=_createdOn%20desc';

	const data = await get(URI);
	if (data.length >= 1) {
		context.render(postTemplate(data), context.root);
	}
}