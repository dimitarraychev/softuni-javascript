import { ideaDeleteRequest, ideasGetRequest } from "../api/ideaRequester.js";
let context;

export async function showDashboardView(ctx) {
    context = ctx;
    context.removeAllViewsExcept(context.views.dashboardView);
    context.authCheck();

    context.views.dashboardView.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>';

    const ideas = await ideasGetRequest('all');
    if (ideas) {
        context.views.dashboardView.innerHTML = '';
        ideas.forEach(idea => addIdeaToDash(idea));

        const detailsBtns = context.views.dashboardView.querySelectorAll('a');
        detailsBtns.forEach(btn => btn.addEventListener('click', detailsView))
    } 
}

function addIdeaToDash(idea) {
    const newIdea = `<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
        <div class="card-body">
            <p class="card-text">${idea.title}</p>
        </div>
        <img class="card-image" src="${idea.img}" alt="Card image cap">
        <a class="btn" href="" id="${idea._id}">Details</a>
    </div>`;

    context.views.dashboardView.innerHTML += newIdea;
}

async function detailsView(e) {
    e.preventDefault()
    const btnId = e.target.id;

    const details = await ideasGetRequest(btnId);
    context.removeAllViewsExcept(context.views.detailsView);
    context.views.detailsView.innerHTML = '';
    showIdeaDetails(details);

    let deleteBtn = context.views.detailsView.querySelector('a');
    if (deleteBtn.getAttribute('data-id') === localStorage.getItem('id')) {
        deleteBtn.style.display = 'none';
    } else {
        deleteBtn.style.display = 'inline-block';
        deleteBtn.addEventListener('click', deleteIdea);
    }
}

function showIdeaDetails(details) {
    context.views.detailsView.innerHTML += `<img class="det-img" src="${details.img}" />
    <div class="desc">
        <h2 class="display-5">${details.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${details.description}</p>
    </div>
    <div class="text-center">
        <a class="btn detb" href="" id="${details._id}" data-id="${details._ownerId}">Delete</a>
    </div>`
}

async function deleteIdea(e) {
    e.preventDefault();
    const ideaId = e.target.id;
    
    try {
        await ideaDeleteRequest(ideaId);
        showDashboardView(context);
    } catch (error) {
        console.log(error);
    }
}