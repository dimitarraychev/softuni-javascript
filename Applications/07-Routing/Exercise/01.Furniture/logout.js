import { get } from "./requester.js";
import { clearUserData } from "./util.js";

export function onLogout(ctx) {
    get('/users/logout');
    clearUserData();
    ctx.redirect('/');
    ctx.updateNav();
}