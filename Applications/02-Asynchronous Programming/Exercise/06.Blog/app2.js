function attachEvents() {
    const loadBtn = document.querySelector('#btnLoadPosts');
    const viewBtn = document.querySelector('#btnViewPost');
    const selectRef = document.querySelector('#posts');
    const postTitleRef = document.querySelector('#post-title');
    const postBodyRef = document.querySelector('#post-body');
    const postCommentsRef = document.querySelector('#post-comments');

    loadBtn.addEventListener('click', loadPosts);
    viewBtn.addEventListener('click', fetchPost);

    const baseURI = 'http://localhost:3030/jsonstore/blog';

    async function loadPosts(ev) {
        try {
            const response = await fetch(baseURI + '/posts');
            const postsData = await response.json();
            Object.entries(postsData).forEach(el => createOption(el));
        } catch (er) {
            console.log(er);
        }
    }

    async function createOption(el) {
        await el;

        const newOpt = document.createElement('option');
        newOpt.value = el[1].id;
        newOpt.textContent = el[1].title;

        selectRef.appendChild(newOpt);
    }

    async function fetchPost(ev) {
        const selectedIndex = selectRef.selectedIndex;
        const selectedOptionID = selectRef[selectedIndex].value;

        try {
            const responseOne = await fetch(baseURI + '/posts/' + selectedOptionID);
            const bodyAndTitleData = await responseOne.json();

            const responseTwo = await fetch(baseURI + '/comments/');
            const commentsData = await responseTwo.json();

            const postComments = Object.entries(commentsData).filter(el => el[1].postId === selectedOptionID);

            createPost(bodyAndTitleData, postComments)
        } catch (er) {
            console.log(er);
        }
    }

    async function createPost(data, comments) {
        await data;

        postTitleRef.textContent = data.title;
        postBodyRef.textContent = data.body;
        postCommentsRef.innerHTML = '';
        comments.forEach(el => createListItem(el[1]));
    }

    async function createListItem(content) {
        await content;

        const li = document.createElement('li');
        li.id = content.id;
        li.textContent = content.text;

        postCommentsRef.appendChild(li);
    }
}

attachEvents();