import { post } from "./requester.js";
import { setUserData } from "./util.js";

let context;

export function loginView(ctx) {
    context = ctx;

    // TODO add login HTML
    const loginHTML = context.html``;

    context.render(loginHTML, context.root);
}

async function submitForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() == '' || password.trim() == '') return;

    const data = await post('/users/login', { email, password });
    setUserData(data);
    context.redirect('/');
}