import { usersPostRequest } from "../api/userRequester.js";

let context;

export function showLoginView(ctx) {
    context = ctx;
    context.removeAllViewsExcept(context.views.loginView);
    const loginForm = context.views.loginView.querySelector('form');
    loginForm.addEventListener('submit', onLogin);
}

async function onLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    if (email.trim() === '' || password.trim() === '') return;

    try {
        await usersPostRequest('login', email, password);
        e.target.reset();
        context.removeAllViewsExcept(context.views.homeView);
        context.authCheck();
    } catch (e) {
        alert(e);
    }
}