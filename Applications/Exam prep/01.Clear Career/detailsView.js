import { del, get } from "./requester.js";
import { getUserData } from "./util.js";

let context;

const detailsHTML = (data, isOwner) => context.html`
     <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-title">${data.title}</p>
            <p id="details-category">
              Category: <span id="categories">${data.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${data.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${data.description}</span>
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${data.requirements}</span>
              </div>
            </div>
            <p>Applications: <strong id="applications">1</strong></p>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
			${isOwner ? context.html`
			<a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${deleteOffer}>Delete</a>
			` : null}
              <!--Bonus - Only for logged-in users ( not authors )-->
              <a href="javascript:void(0)" id="apply-btn" @click=${apply}>Apply</a>
            </div>
          </div>
        </section>
`;

export async function detailsView(ctx) {
	context = ctx;
	const offerID = context.params.id;
	const data = await get(`/data/offers/${offerID}`);

	const userData = getUserData();
	const isOwner = data._ownerId == userData._id;

	context.render(detailsHTML(data, isOwner), context.root);
}

async function deleteOffer(e) {
	const id = context.params.id;

	const confirm = window.confirm('Are you sure you want to delete this offer?');
	if (confirm) {
		await del(`/data/offers/${id}`);
		context.redirect('/dashboard');
	}
}

function apply(e) {
	e.target.style.display = 'none';
	const applications = document.querySelector('#applications');
	applications.textContent = Number(applications.textContent) + 1;
}