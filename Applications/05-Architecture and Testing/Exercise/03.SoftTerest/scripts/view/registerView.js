import { usersPostRequest } from "../api/userRequester.js";

let context;

export function showRegisterView(ctx) {
    context = ctx;
    context.removeAllViewsExcept(context.views.registerView);
    const registerForm = context.views.registerView.querySelector('form');
    registerForm.addEventListener('submit', onRegister);
}

async function onRegister(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password, repeatPassword } = Object.fromEntries(formData);

    if (email.length < 3 || password.length < 3 || password !== repeatPassword) return;

    try {
        await usersPostRequest('register', email, password);
        e.target.reset();
        context.removeAllViewsExcept(context.views.homeView);
        context.authCheck();
    } catch (e) {
        alert(e);
    }
}