import { usersPostRequest } from "./userRequester.js";

const form = document.querySelector('#register-form');
let context;

function attachRegisterListener(ctx) {
    form.addEventListener('submit', onRegister);
    context = ctx;
}

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if (email.trim() === '' || password.length < 6 || password != repeatPassword) return;

    await usersPostRequest('register', email, password);
    form.reset();
    context && context.displayHomePage();
}

export { attachRegisterListener };