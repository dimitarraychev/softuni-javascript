import { post } from "./requester.js";
import { setUserData } from "./util.js";

let context;

export function registerView(ctx) {
	context = ctx;

	//TODO add register HTML with @submit=${submitForm}
	const registerHTML = context.html``;

	context.render(registerHTML, context.root);
}

async function submitForm(event) {
	event.preventDefault();

	//TODO check register data
	const formData = new FormData(event.target);
	const email = formData.get('email');
	const password = formData.get('password');
	const rePass = formData.get('re-password');

	if (email.trim() == '' || password.trim() == '' || password != rePass) return window.alert('All fields are required!');

	const data = await post('/users/register', { email, password });
	setUserData(data);
	context.redirect('/'); //TODO check redirect
}