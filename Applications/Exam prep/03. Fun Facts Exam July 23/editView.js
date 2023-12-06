import { get, put } from "./requester.js";

let context;

const editHTML = (data) => context.html`
   <section id="edit">
          <div class="form" @submit=${editOffer}>
            <h2>Edit Fact</h2>
            <form class="edit-form">
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              .value = ${data.category}
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
              .value = ${data.imageUrl}
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
            .value = ${data.description}
          ></textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="10"
            cols="50"
            .value = ${data.moreInfo}
          ></textarea>
              <button type="submit">Post</button>
            </form>
          </div>
        </section>
`;

export async function editView(ctx) {
	context = ctx;

	const offerID = context.params.id;
	const data = await get(`/data/facts/${offerID}`);

	context.render(editHTML(data), context.root);
}

async function editOffer(e) {
	e.preventDefault();
	const id = context.params.id;

	const formData = new FormData(e.target);
  const imageUrl = formData.get('image-url');
  const category = formData.get('category');
  const description = formData.get('description');
  const moreInfo = formData.get('additional-info');
	if (category.trim() == '') return;
	if (imageUrl.trim() == '') return;
	if (description.trim() == '') return;
	if (moreInfo.trim() == '') return;

	await put(`/data/facts/${id}`, { category, imageUrl, description, moreInfo });
	context.redirect(`/details/${id}`);
}