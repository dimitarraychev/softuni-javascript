import { post } from "./requester.js";

let context;

export function createView(ctx, isValid) {
    context = ctx;

    const createHTML = context.html`
     <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${submitForm}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control ${isValid.make ? 'is-valid' : 'is-invalid'}" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control ${isValid.model ? 'is-valid' : 'is-invalid'}" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control ${isValid.year ? 'is-valid' : 'is-invalid'}" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control ${isValid.desc ? 'is-valid' : 'is-invalid'}" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control ${isValid.price ? 'is-valid' : 'is-invalid'}" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control ${isValid.img ? 'is-valid' : 'is-invalid'}" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
    `;

    context.render(createHTML, context.root);
}

async function submitForm(event) {
    event.preventDefault();

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
        await post('/data/catalog', { make, model, year, description, price, img, material });
        context.redirect('/');
    } else {
        createView(context, isValid);
    }
}