import { post } from "./requester.js";

let context;

const createHTML = () => context.html`
  <section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form class="create-form" @submit=${createOffer}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fruit</button>
            </form>
          </div>
        </section>
`;

export function createView(ctx) {
	context = ctx;
	context.render(createHTML(), context.root);
}

async function createOffer(e) {
	e.preventDefault();

	const formData = new FormData(e.target);
	const { name, imageUrl, description, nutrition } = Object.fromEntries(formData);
	if (name.trim() == '') return;
	if (imageUrl.trim() == '') return;
	if (description.trim() == '') return;
	if (nutrition.trim() == '') return;

	await post('/data/fruits', { name, imageUrl, description, nutrition });
	context.redirect('/dashboard');
}