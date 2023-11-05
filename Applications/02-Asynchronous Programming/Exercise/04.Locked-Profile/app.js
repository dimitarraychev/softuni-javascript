async function lockedProfile() {
    const main = document.querySelector('#main');
    const uri = 'http://localhost:3030/jsonstore/advanced/profiles';

    const response = await fetch(uri);
    const data = await response.json();
    Object.entries(data).forEach(el => createProfile(el[1]));

    main.innerHTML = '';
    let num = 0;

    async function createProfile(data) {
        await data;
        num++;

        const newDiv = document.createElement('div');
        newDiv.classList.add('profile');

        newDiv.innerHTML += `<img src="./iconProfile2.png" class="userIcon" />`;
        newDiv.innerHTML += `<label>Lock</label><input type="radio" name="user${num}Locked" value="lock" checked>`;
        newDiv.innerHTML += `<label>Unlock</label><input type="radio" name="user${num}Locked" value="unlock"><br><hr>`;
        newDiv.innerHTML += `<label>Username</label><input type="text" name="user${num}Username" value="${data.username}" disabled readonly />`;
        newDiv.innerHTML += `<div id="user${num}HiddenFields" class="hiddenInfo"><hr></div>`;

        const hiddenDiv = newDiv.querySelector(`#user${num}HiddenFields`)
        hiddenDiv.innerHTML += `<label>Email:</label><input type="email" name="user${num}Email" value="${data.email}" disabled readonly />`;
        hiddenDiv.innerHTML += `<label>Age:</label><input type="email" name="user${num}Age" value="${data.age}" disabled readonly />`;
        newDiv.innerHTML += `<button>Show More</button>`;

        const showMoreBtn = newDiv.querySelector('button');
        showMoreBtn.addEventListener('click', showMore);

        function showMore(event) {
            const element = event.target.parentNode;
            const hiddenInfo = element.querySelector('div');
            const unlockBtn = element.querySelectorAll('input')[1];

            if (unlockBtn.checked && hiddenInfo.classList.contains('hiddenInfo')) {
                hiddenInfo.classList.remove('hiddenInfo');
                showMoreBtn.textContent = 'Hide it';
            } else if (unlockBtn.checked) {
                hiddenInfo.classList.add('hiddenInfo');
                showMoreBtn.textContent = 'Show More';
            }
        }

        main.appendChild(newDiv);
    }
}