import { get, put } from "./requester.js";

let context;

const editHTML = (data) => context.html`
 <section id="edit">
          <div class="form" @submit=${editOffer}>
            <h2>Edit Fruit</h2>
            <form class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
				.value = ${data.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
				.value = ${data.imageUrl}
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
				.value = ${data.description}
              ></textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
				.value = ${data.nutrition}
              ></textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;

export async function editView(ctx) {
	context = ctx;

	const offerID = context.params.id;
	const data = await get(`/data/fruits/${offerID}`);

	context.render(editHTML(data), context.root);
}

async function editOffer(e) {
	e.preventDefault();
	const id = context.params.id;

	const formData = new FormData(e.target);
	const { name, imageUrl, description, nutrition } = Object.fromEntries(formData);
	if (name.trim() == '') return;
	if (imageUrl.trim() == '') return;
	if (description.trim() == '') return;
	if (nutrition.trim() == '') return;

	await put(`/data/fruits/${id}`, { name, imageUrl, description, nutrition });
	context.redirect(`/details/${id}`);
}