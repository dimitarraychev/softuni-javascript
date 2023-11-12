import { attachRegisterListener } from "./registerView.js";
import { attachLoginListener } from "./loginView.js";
import { usersGetRequest } from "./userRequester.js";
import { moviesGetAllRequest } from "./movieRequester.js";

const sections = document.querySelectorAll('section');
const [homePgView, addBtn, movieSect, addMovie, movieExample, editMovie, loginForm, registerForm] = [...sections];
const [welcome, logoutNav, loginNav, registerNav] = document.querySelectorAll('a.nav-link');
const moviesBtn = document.querySelector('a.navbar-brand').addEventListener('click', displayHomePage);
const moviesList = document.querySelector('#movies-list');

loginNav.addEventListener('click', displayLoginPage);
registerNav.addEventListener('click', displayRegisterPage);
logoutNav.addEventListener('click', onLogout);

function authCheck() {
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');
    const id = sessionStorage.getItem('id');

    if (token) return {token, email, id};
    else return false;
}

async function displayHomePage() {
    hideElements(addMovie, movieExample, editMovie, loginForm, registerForm);
    showElements(homePgView, movieSect);
    const auth = authCheck();

    if (auth) {
        hideElements(loginNav, registerNav);
        showElements(welcome, logoutNav, addBtn);
        welcome.textContent = `Welcome, ${auth.email}`;
    } else {
        hideElements(welcome, logoutNav, addBtn);
        showElements(loginNav, registerNav);
    }

    const moviesData = await moviesGetAllRequest();
    moviesList.innerHTML = '';
    moviesData.forEach(movie => createMovieView(movie));
}
displayHomePage();

function displayLoginPage(event) {
    hideElements(homePgView, addBtn, movieSect, addMovie, movieExample, editMovie, registerForm, loginNav);
    showElements(loginForm, registerNav);

    let ctx = { displayHomePage };
    attachLoginListener(ctx);
}

function displayRegisterPage(event) {
    hideElements(homePgView, addBtn, movieSect, addMovie, movieExample, editMovie, loginForm, registerNav);
    showElements(registerForm, loginNav);

    let ctx = { displayHomePage };
    attachRegisterListener(ctx);
}

async function onLogout(event) {
    await usersGetRequest(sessionStorage.getItem('token'));
    displayHomePage();
}

function hideElements(...elements) {
    elements.forEach(el => {
        el.style.display = 'none';
    });
}

function showElements(...elements) {
    elements.forEach(el => {
        el.style.display = 'block';
    });
}

function createMovieView(movie) {
    console.log(movieSect);
    const li = document.createElement('li');
    li.classList.add('.card');
    li.innerHTML += `<img src="${movie.img}"class="card-img-top" /><h3>${movie.title}</h3><button>Details</button>`;
    moviesList.appendChild(li);
}