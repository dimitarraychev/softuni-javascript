import { del, get, post } from "./requester.js";
import { getUserData } from "./util.js";

let context;

const detailsHTML = (data, isOwner, totalLikes, isLikedByUser) => context.html`
  <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-category">${data.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${data.description}</p>
                   <p id ="more-info">${data.moreInfo}</p>
              </div>

              <h3>Likes:<span id="likes">${totalLikes}</span></h3>

               <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
			${isOwner ? context.html`
			<a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${deleteOffer}>Delete</a>
			` : null}

             <!--Bonus - Only for logged-in users ( not authors )-->
           ${!isOwner && isOwner != undefined && isLikedByUser != 1 ? context.html`<a href="javavscript:void(0)" id="like-btn" @click=${likeFact}>Like</a>` : null}

          </div>
            </div>
        </div>
      </section>
`;

export async function detailsView(ctx) {
	context = ctx;
	const offerID = context.params.id;
	const data = await get(`/data/facts/${offerID}`);
	
	let isOwner;
	let userId;

	const userData = getUserData();
	if (userData) {
		isOwner = data._ownerId == userData._id;
		userId = userData._id
	}

	const { totalLikes, isLikedByUser } = await getLikes(offerID, userId);

	context.render(detailsHTML(data, isOwner, totalLikes, isLikedByUser), context.root);
}

async function deleteOffer(e) {
	const id = context.params.id;

	const confirm = window.confirm('Are you sure you want to delete this fact?');
	if (confirm) {
		await del(`/data/facts/${id}`);
		context.redirect('/dashboard');
	}
}

async function getLikes(id, userId) {

	const totalLikes = await get(`/data/likes?where=factId%3D%22${id}%22&distinct=_ownerId&count`);

	let isLikedByUser;
	if (userId) {
		isLikedByUser = await get(`/data/likes?where=factId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`);
	}

	return { totalLikes, isLikedByUser };
}

async function likeFact(e) {
	e.preventDefault();
	const factID = context.params.id;

	const data = await post('/data/likes', { factID });
	detailsView(context);
}