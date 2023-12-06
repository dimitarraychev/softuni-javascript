import { post } from "./requester.js";
import { setUserData } from "./util.js";

let context;

export function loginView(ctx) {
    context = ctx;

    //TODO add login HTML with @submit=${submitForm}
    const loginHTML = context.html``;

    context.render(loginHTML, context.root);
}

async function submitForm(event) {
    event.preventDefault();
    
    //TODO check login data
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() == '' || password.trim() == '') return window.alert('All fields are required!');

    const data = await post('/users/login', { email, password });
    setUserData(data);
    context.redirect('/'); //TODO check redirect
}