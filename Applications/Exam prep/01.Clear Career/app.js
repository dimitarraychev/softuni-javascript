import page from "./node_modules/page/page.mjs";
import { html, render } from "./node_modules/lit-html/lit-html.js";
import { homeView } from "./homeView.js";
import { getUserData } from "./util.js";
import { registerView } from "./registerView.js";
import { loginView } from "./loginView.js";
import { onLogout } from "./logout.js";
import { createView } from "./createView.js";
import { dashboardView } from "./dashboardView.js";
import { detailsView } from "./detailsView.js";
import { editView } from "./editView.js";

// TODO change root and nav
const root = document.querySelector('main');
const userNav = document.querySelector('.user');
const guestNav = document.querySelector('.guest');

page(middleware);
page('/index.html', '/');
page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/logout', onLogout);
page('/create', createView);
page('/dashboard', dashboardView);
page('/details/:id', detailsView);
page('/edit/:id', editView);


// page ('*', () => root.innerHTML = '404 Not Found!');

page.start();

function middleware(ctx, next) {
    ctx.root = root;
    ctx.html = html;
    ctx.render = render;
    ctx.updateNav = updateNav;
    ctx.redirect = page.redirect;

    updateNav();
    next();
}

function updateNav() {
    const userInfo = getUserData();
    if (userInfo) {
        userNav.style.display = 'inline';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline';
    }
}