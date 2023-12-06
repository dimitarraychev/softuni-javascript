import { get, put } from "./requester.js";

let context;

export async function editView(ctx, isValid) {
    context = ctx;

    const itemID = context.params.id;
    const itemData = await get(`/data/catalog/${itemID}`);

    const editHTML = context.html`
       <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${submitForm}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control ${isValid.make ? 'is-valid' : 'is-invalid'}" id="new-make" type="text" name="make" value="${itemData.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control ${isValid.model ? 'is-valid' : 'is-invalid'}" id="new-model" type="text" name="model" value="${itemData.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control ${isValid.year ? 'is-valid' : 'is-invalid'}" id="new-year" type="number" name="year" value="${itemData.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control ${isValid.desc ? 'is-valid' : 'is-invalid'}" id="new-description" type="text" name="description" value="${itemData.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control ${isValid.price ? 'is-valid' : 'is-invalid'}" id="new-price" type="number" name="price" value="${itemData.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control ${isValid.img ? 'is-valid' : 'is-invalid'}" id="new-image" type="text" name="img" value="${itemData.img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${itemData.material}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
    `;

    context.render(editHTML, context.root);
}

async function submitForm(event) {
    event.preventDefault();

    const itemID = context.params.id;
    let isValid = {};

    const formData = new FormData(event.target);
    const { make, model, year, description, price, img, material } = Object.fromEntries(formData);

    if (make.length >= 4) isValid.make = true;
    if (model.length >= 4) isValid.model = true;
    if (year >= 1950 && year <= 2050) isValid.year = true;
    if (description.length >= 10) isValid.desc = true;
    if (price.trim() != '' && price >= 0) isValid.price = true;
    if (img.trim() != '') isValid.img = true;

    if (isValid.make, isValid.model, isValid.year, isValid.desc, isValid.price, isValid.img) {
        await put(`/data/catalog/${itemID}`, { make, model, year, description, price, img, material });
        context.redirect('/');
    } else {
        editView(context, isValid);
    }
}