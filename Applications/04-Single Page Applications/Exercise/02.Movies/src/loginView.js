import { usersPostRequest } from "./userRequester.js";

const form = document.querySelector('#login-form');
let context;

function attachLoginListener(ctx) {
    form.addEventListener('submit', onLogin);
    context = ctx;
}

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() === '' || password.trim() === '') return;

    try {
        await usersPostRequest('login', email, password);
        form.reset();
        context && context.displayHomePage();
    } catch (error) {
        console.log(error);
    }
}

export { attachLoginListener };