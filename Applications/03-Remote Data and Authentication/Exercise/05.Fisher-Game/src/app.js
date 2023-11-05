const userBtns = document.querySelector('#user');
const guestBtns = document.querySelector('#guest');
const loadBtn = document.querySelector('.load');
const addBtn = document.querySelector('.add');
const logoutBtn = document.querySelector('#logout');
const usernameRef = document.querySelector('.email span');
const catchesFieldRef = document.querySelector('#catches');
const allCatches = document.querySelectorAll('.catch');

logoutBtn.addEventListener('click', onLogout);
loadBtn.addEventListener('click', loadCatches);
addBtn.addEventListener('click', addCatch);

const token = sessionStorage.getItem('token');
if (token) {
    const email = sessionStorage.getItem('email');
    const id = sessionStorage.getItem('id');

    usernameRef.textContent = email;
    guestBtns.style.display = 'none';
    userBtns.style.display = 'inline-block';
    addBtn.disabled = false;
} else {
    userBtns.style.display = 'none';
    guestBtns.style.display = 'inline-block';
    addBtn.disabled = true;
}

const catchesURI = 'http://localhost:3030/data/catches';

async function loadCatches(event) {
    try {
        const response = await fetch(catchesURI);
        const data = await response.json();
        catchesFieldRef.innerHTML = '';
        data.forEach(e => createCatch(e));
    } catch (error) {
        console.log(error);
    }
}
// loadCatches();

async function createCatch(catchObj) {
    await catchObj;

    const newCatch = document.createElement('div');
    newCatch.classList.add('catch');
    newCatch.innerHTML += ` <label>Angler</label>
    <input type="text" class="angler" value="${catchObj.angler}">
    <label>Weight</label>
    <input type="text" class="weight" value="${catchObj.weight}">
    <label>Species</label>
    <input type="text" class="species" value="${catchObj.species}">
    <label>Location</label>
    <input type="text" class="location" value="${catchObj.location}">
    <label>Bait</label>
    <input type="text" class="bait" value="${catchObj.bait}">
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${catchObj.captureTime}">
    <button class="update" data-id="${catchObj._ownerId}" value="${catchObj._id}">Update</button>
    <button class="delete" data-id="${catchObj._ownerId}" value="${catchObj._id}">Delete</button>`;

    const id = sessionStorage.getItem('id');
    const [updateBtn, deleteBtn] = newCatch.querySelectorAll('button');
    const inputs = newCatch.querySelectorAll('input');

    updateBtn.addEventListener('click', updateCatch);
    deleteBtn.addEventListener('click', deleteCatch);

    if (updateBtn.getAttribute("data-id") !== id) {
        Array.from(inputs).forEach(i => i.disabled = true);
        updateBtn.disabled = true;
        deleteBtn.disabled = true;
    }

    catchesFieldRef.appendChild(newCatch);
}

async function updateCatch(event) {
    const currTarget = event.target.parentNode;
    const catchID = event.target.value;
    const inputs = currTarget.querySelectorAll('input');

    const angler = inputs[0].value;
    const weight = inputs[1].value;
    const species = inputs[2].value;
    const location = inputs[3].value;
    const bait = inputs[4].value;
    const captureTime = inputs[5].value;

    if (angler.trim() === '' || weight.trim() === '' || species.trim() === '' ||
        location.trim() === '' || bait.trim() === '' || captureTime.trim() === '') return;

    const data = {
        method: 'PUT',
        headers: { 'X-Authorization': token, 'Content-Type':'application/json' },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
    };

    try {
        const response = await fetch(catchesURI + '/' + catchID, data);
        if (response.status !== 200) throw new Error('Update action was interrupted!');
        loadCatches();
    } catch (error) {
        console.log(error);
    }
}

async function deleteCatch(event) {
    const currTarget = event.target.parentNode;
    const catchID = event.target.value;
    const data = {
        method: 'DELETE',
        headers: { 'X-Authorization': token }
    };

    try {
        const response = await fetch(catchesURI + '/' + catchID, data);
        if (response.status !== 200) throw new Error('Delete action was interrupted!');
        loadCatches();
    } catch (error) {
        console.log(error);
    }

}

async function addCatch(event) {
    event.preventDefault();

    const formRef = document.querySelector('form');
    const form = new FormData(formRef);
    const angler = form.get('angler');
    const weight = form.get('weight');
    const species = form.get('species');
    const location = form.get('location');
    const bait = form.get('bait');
    const captureTime = form.get('captureTime');

    if (angler.trim() === '' || weight.trim() === '' || species.trim() === '' ||
    location.trim() === '' || bait.trim() === '' || captureTime.trim() === '') return;

    const data = {
        method: 'POST',
        headers: { 'X-Authorization': token, 'Content-Type':'application/json' },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
    };

    try {
        const response = await fetch(catchesURI, data);
        const responseData = await response.json();
        loadCatches();
    } catch (error) {
        console.log(error);
    }
}

async function onLogout(event) {

    const uri = 'http://localhost:3030/users/logout';
    const data = {
        method: 'GET',
        headers: { 'X-Authorization': token }
    };

    try {
        const response = await fetch(uri, data);
        if (response.status !== 204) throw new Error ('Logout not possible at the moment');
        sessionStorage.clear();
        // window.location = ('index.html');
        userBtns.style.display = 'none';
        guestBtns.style.display = 'inline-block';
        addBtn.disabled = true;
    } catch (error) {
        console.log(error);
    }
}