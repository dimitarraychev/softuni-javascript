import { ideaPostRequest } from "../api/ideaRequester.js";
import { showDashboardView } from "./dashboardView.js";

let context;

export function showCreateView(ctx) {
    context = ctx;
    context.removeAllViewsExcept(context.views.createView);
    context.authCheck();

    const createForm = context.views.createView.querySelector('form');
    createForm.addEventListener('submit', onCreate);
}

function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { title, description, imageURL } = Object.fromEntries(formData);

    if (title.length < 6 || description.length < 10 || imageURL.length < 5) return;

    try {
        ideaPostRequest(title, description, imageURL);
        e.target.reset();
        showDashboardView(context);
    } catch (error) {
        alert(error);
    }
}