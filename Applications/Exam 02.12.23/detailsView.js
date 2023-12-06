import { del, get, post } from "./requester.js";
import { getUserData } from "./util.js";

let context;

const detailsHTML = (data, isOwner, isLoggedIn, likes, isLiked) => context.html`
 <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <div>
            <p id="details-category">${data.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${data.description}</p>
                   <p id ="more-info">${data.moreInfo}</p>
              </div>
            </div>
              <h3>Is This Useful:<span id="likes">${likes}</span></h3>

               <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            ${isOwner ? context.html`
			<a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${deleteCharacter}>Delete</a>
			` : null}
			
             <!--Bonus - Only for logged-in users ( not authors )-->
            ${!isOwner && isLoggedIn && isLiked == 0 ? context.html`
            <a href="javascript:void(0)" id="like-btn" @click=${likeChar}>Like</a>
            ` : null}

          </div>
            </div>
        </div>
      </section>
`;

export async function detailsView(ctx) {
	context = ctx;
	const charID = context.params.id;
	const data = await get(`/data/characters/${charID}`);

	let isOwner;
	let isLoggedIn = false;
	let isLiked = 0;

	const userData = getUserData();
	if (userData) {
		let userId = userData._id;
		isOwner = data._ownerId == userId;
		isLoggedIn = true;
		isLiked = await isLikedByUser(charID, userId);
	}

	const likes = await getTotalLikes(charID);

	context.render(detailsHTML(data, isOwner, isLoggedIn, likes, isLiked), context.root);
}

async function deleteCharacter(e) {
	const id = context.params.id;

	const confirm = window.confirm('Are you sure you want to delete this character?');
	if (confirm) {
		await del(`/data/characters/${id}`);
		context.redirect('/dashboard');
	}
}

async function getTotalLikes(characterId) {

	const totalLikes = await get(`/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`);
	return totalLikes;
}

async function likeChar(e) {
	e.preventDefault();
	const characterId = context.params.id;

	const likedChar = await post('/data/useful', { characterId });
	detailsView(context);
}

async function isLikedByUser(characterId, userId) {
	return await get(`/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}