import { showHomeView } from "./scripts/view/homeView.js";
import { showDashboardView } from "./scripts/view/dashboardView.js";
import { showLoginView } from "./scripts/view/loginView.js";
import { showRegisterView } from "./scripts/view/registerView.js";
import { showCreateView } from "./scripts/view/createView.js";
import { usersGetRequest } from "./scripts/api/userRequester.js";

const viewsRef = document.querySelectorAll('body>div');
const [homeView, registerView, loginView, dashboardView, detailsView, createView] = Array.from(viewsRef);
const views = { homeView, registerView, loginView, dashboardView, detailsView, createView };

const navBar = document.querySelector('nav');
navBar.addEventListener('click', navigateTo);

const linksRef = navBar.querySelectorAll('a');
const [homeBtn, dashboardBtn, createBtn, logoutBtn, loginBtn, registerBtn] = Array.from(linksRef);
const links = { homeBtn, dashboardBtn, createBtn, logoutBtn, loginBtn, registerBtn };

const navEnum = {
    Home: showHomeView,
    Dashboard: showDashboardView,
    Create: showCreateView,
    Logout: onLogout,
    Login: showLoginView,
    Register: showRegisterView
};

const ctx = {
    views,
    links,
    removeAllViewsExcept,
    authCheck
};

showHomeView(ctx);

function navigateTo(e) {
    e.preventDefault();

    if (!e.target.textContent) return navEnum.Home(ctx);

    if (e.target.textContent.length > 10) return;
    
    navEnum[e.target.textContent](ctx);
}

function removeAllViewsExcept(view) {
    Array.from(viewsRef).forEach(view => {
        view.style.display = 'none';
    });
    view.style.display = 'block';
}

async function onLogout(event) {
    await usersGetRequest(localStorage.getItem('token'));
    showHomeView(ctx);
}

function authCheck() {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const id = localStorage.getItem('id');

    if (!token) {
        createBtn.style.display = 'none';
        logoutBtn.style.display = 'none';
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
    } else {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        createBtn.style.display = 'block';
        logoutBtn.style.display = 'block';
    }
}