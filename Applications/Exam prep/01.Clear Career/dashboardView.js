import { get } from "./requester.js";

let context;

const postTemplate = (data) => context.html`
    <section id="dashboard">
        <h2>Job Offers</h2>
        ${data.map(e => context.html`
          <div class="offer">
            <img src=${e.imageUrl} alt="example1" />
            <p>
              <strong>Title: </strong><span class="title">${e.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${e.salary}</span></p>
            <a class="details-btn" href="/details/${e._id}">Details</a>
          </div>
        `)}
    </section>
`;

export function dashboardView(ctx) {
    context = ctx;

    const dashboardHTML = context.html`
            <section id="dashboard">
          <h2>Job Offers</h2>

          <!-- Display an h2 if there are no posts -->
          <h2>No offers yet.</h2>
        </section>
    `;

    context.render(dashboardHTML, context.root);
    getOffers();
}

async function getOffers() {
    const URI = '/data/offers?sortBy=_createdOn%20desc';

    const data = await get(URI);
    if (data.length >= 1) {
        context.render(postTemplate(data), context.root);
    }
}