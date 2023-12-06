import { get, put } from "./requester.js";

let context;

const editHTML = (data) => context.html`
<section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Edit Character</h2>
            <form class="edit-form" @submit=${editChar}>
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Character Type"
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
            rows="2"
            cols="10"
			.value = ${data.description}
          ></textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="2"
            cols="10"
			.value = ${data.moreInfo}
          ></textarea>
              <button type="submit">Edit</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
`;

export async function editView(ctx) {
	context = ctx;

	const charID = context.params.id;
	const data = await get(`/data/characters/${charID}`);
	console.log(data);

	context.render(editHTML(data), context.root);
}

async function editChar(e) {
	e.preventDefault();
	const id = context.params.id;

	const formData = new FormData(e.target);
	const category = formData.get('category');
	const imageUrl = formData.get('image-url');
	const description = formData.get('description');
	const moreInfo = formData.get('additional-info');
	if (category.trim() == '') return;
	if (imageUrl.trim() == '') return;
	if (description.trim() == '') return;
	if (moreInfo.trim() == '') return;

	await put(`/data/characters/${id}`, { category, imageUrl, description, moreInfo });
	context.redirect(`/details/${id}`);
}