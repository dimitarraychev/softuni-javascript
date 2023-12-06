import { get, put } from "./requester.js";

let context;

const editHTML = (data) => context.html`
        <section id="edit">
          <div class="form">
            <h2>Edit Offer</h2>
            <form class="edit-form" @submit=${editOffer}>
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
                .value = ${data.title}
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
                .value = ${data.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
                .value = ${data.category}
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
                .value = ${data.description}
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
                .value = ${data.requirements}
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
                .value = ${data.salary}
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;

export async function editView(ctx) {
    context = ctx;

    const offerID = context.params.id;
	const data = await get(`/data/offers/${offerID}`);

	context.render(editHTML(data), context.root);
}

async function editOffer(e) {
    e.preventDefault();
    const id = context.params.id;

    const formData = new FormData(e.target);
    const { title, imageUrl, category, description, requirements, salary } = Object.fromEntries(formData);
    if (title.trim() == '') return;
    if (imageUrl.trim() == '') return;
    if (category.trim() == '') return;
    if (description.trim() == '') return;
    if (requirements.trim() == '') return;
    if (salary.trim() == '') return;

    await put(`/data/offers/${id}`, { title, imageUrl, category, description, requirements, salary });
    context.redirect(`/details/${id}`);
}