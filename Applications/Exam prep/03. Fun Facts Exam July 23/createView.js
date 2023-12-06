import { post } from "./requester.js";

let context;

const createHTML = () => context.html`
        <section id="create">
          <div class="form">
            <h2>Add Fact</h2>
            <form class="create-form" @submit=${createOffer}>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Category"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
              id="description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="additional-info"
              name="additional-info"
              placeholder="Additional Info"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fact</button>
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
  const imageUrl = formData.get('image-url');
  const category = formData.get('category');
  const description = formData.get('description');
  const moreInfo = formData.get('additional-info');
	if (category.trim() == '') return;
	if (imageUrl.trim() == '') return;
	if (description.trim() == '') return;
	if (moreInfo.trim() == '') return;

	await post('/data/facts', { category, imageUrl, description, moreInfo });
	context.redirect('/dashboard');
}