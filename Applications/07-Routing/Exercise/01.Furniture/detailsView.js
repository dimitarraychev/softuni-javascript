import { get, del } from "./requester.js";
import { getUserData } from "./util.js";

let context;

export async function detailsView(ctx) {
    context = ctx;

    const itemID = context.params.id;
    const itemData = await get(`/data/catalog/${itemID}`);
    const userData = getUserData();

    const isOwner = itemData._ownerId == userData._id ? true : false;

    const detailsHTML = context.html`
       <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=${itemData.img.replace('.', '')} />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${itemData.make}</span></p>
                <p>Model: <span>${itemData.model}</span></p>
                <p>Year: <span>${itemData.year}</span></p>
                <p>Description: <span>${itemData.description}</span></p>
                <p>Price: <span>${itemData.price}</span></p>
                <p>Material: <span>${itemData.material}</span></p>
               ${isOwner ? context.html`
               <div>
                    <a href='/edit/${itemID}' class="btn btn-info">Edit</a>
                    <a href='javascript:void(0)' class="btn btn-red" @click=${() => deleteItem(itemID)}>Delete</a>
                </div>
               ` : ''}
            </div>
        </div>
    `;

    context.render(detailsHTML, context.root);
}

async function deleteItem(itemID) {

    let confirm = window.confirm('Are you sure you want to delete?');

    if (confirm) {
        await del(`/data/catalog/${itemID}`);
        context.redirect('/');
    }
}