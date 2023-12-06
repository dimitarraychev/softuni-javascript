import { get } from "./requester.js";

let context;

const searchHTML = (data) => context.html`
<section id="search">

    <div class="form">
        <h2>Search</h2>
        <form class="search-form" @submit=${submitForm}>
            <input
            type="text"
            name="search"
            id="search-input"
            />
            <button class="button-list">Search</button>
        </form>
        </div>
        <h4>Results:</h4>
        <div class="search-result">
        ${data.length > 0 ? data.map( el => context.html`
        <div class="fruit">
        <img src=${el.imageUrl} alt="example1" />
        <h3 class="title">${el.name}</h3>
        <p class="description">${el.description}</p>
        <a class="details-btn" href="/details/${el._id}">More Info</a>
        </div>
        `) : context.html`<p class="no-result">No result.</p>`}
    </div>
</section>
`;

const defaultSearchView = () => context.html`
    <section id="search">

<div class="form">
    <h2>Search</h2>
    <form class="search-form" @submit=${submitForm}>
        <input
        type="text"
        name="search"
        id="search-input"
        />
        <button class="button-list">Search</button>
    </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
    
</div>
`;

export function searchView(ctx) {
    context = ctx;
    context.render(defaultSearchView(), context.root);
}

async function submitForm(e) {
    e.preventDefault();

	const formData = new FormData(e.target);
	const query = formData.get('search');

    if (query.trim() == '') return window.alert('Input is required!');

	const data = await get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
    
    context.render(searchHTML(data), context.root);
}