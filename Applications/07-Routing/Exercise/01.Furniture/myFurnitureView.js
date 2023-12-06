import { get } from "./requester.js";
import { getUserData } from "./util.js";

export async function myFurnitureView(ctx) {

    const userData = getUserData();
    const furnitureData = await get(`/data/catalog?where=_ownerId%3D%22${userData._id}%22`);

    const myFurnitureHTML = ctx.html`
     <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${furnitureData.map(el => ctx.html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src=${el.img} />
                            <p>${el.description}</p>
                            <footer>
                                <p>Price: <span>${el.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${el._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
            `)}
        </div>
    `;

    ctx.render(myFurnitureHTML, ctx.root);
}