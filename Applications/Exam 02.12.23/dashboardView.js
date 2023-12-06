import { get } from "./requester.js";

let context;

const postTemplate = (data) => context.html`
        <h2>Characters</h2>
        <section id="characters">
		${data.map(el => context.html`
		<div class="character">
            <img src=${el.imageUrl} alt="example1" />
            <div class="hero-info">
              <h3 class="category">${el.category}</h3>
              <p class="description">${el.description}</p>
              <a class="details-btn" href="/details/${el._id}">More Info</a>
            </div>
          </div>
		`)}
        </section>
`;

export function dashboardView(ctx) {
	context = ctx;

	const dashboardHTML = context.html`
	    <h2>Characters</h2>
        <section id="characters">
			<h2>No added Heroes yet.</h2>
        </section>
	`;

	context.render(dashboardHTML, context.root);
	getData();
}

async function getData() {
	const URI = '/data/characters?sortBy=_createdOn%20desc';

	const data = await get(URI);
	if (data.length >= 1) {
		context.render(postTemplate(data), context.root);
	}
}