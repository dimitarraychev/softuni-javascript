import { del, get } from "./requester.js";
import { getUserData } from "./util.js";

let context;

const detailsHTML = (data, isOwner) => context.html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-title">${data.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${data.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${data.nutrition}</p>
              </div>
               <!--Edit and Delete are only for creator-->
			${isOwner ? context.html`
			<div id="action-buttons">
            <a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${deleteOffer}>Delete</a>
          </div>
			` : null}
            </div>
        </div>
	</section>
`;

export async function detailsView(ctx) {
	context = ctx;
	const offerID = context.params.id;
	const data = await get(`/data/fruits/${offerID}`);

	let isOwner;

	const userData = getUserData();
	if (userData) {
		isOwner = data._ownerId == userData._id;
	}

	context.render(detailsHTML(data, isOwner), context.root);
}

async function deleteOffer(e) {
	const id = context.params.id;

	const confirm = window.confirm('Are you sure you want to delete this fruit?');
	if (confirm) {
		await del(`/data/fruits/${id}`);
		context.redirect('/dashboard');
	}
}