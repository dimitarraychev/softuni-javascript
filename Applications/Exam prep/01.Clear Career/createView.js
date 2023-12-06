import { post } from "./requester.js";

let context;

const createHTML = () => context.html`
        <section id="create">
          <div class="form" @submit=${createOffer}>
            <h2>Create Offer</h2>
            <form class="create-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
              />

              <button type="submit">post</button>
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
    const { title, imageUrl, category, description, requirements, salary } = Object.fromEntries(formData);
    if (title.trim() == '') return;
    if (imageUrl.trim() == '') return;
    if (category.trim() == '') return;
    if (description.trim() == '') return;
    if (requirements.trim() == '') return;
    if (salary.trim() == '') return;

    await post('/data/offers', { title, imageUrl, category, description, requirements, salary });
    context.redirect('/dashboard');
}