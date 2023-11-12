import { fetchTopics, postTopic, fetchComments } from './requester.js';
import { renderCommentsView, addComment } from './commentsView.js';

const form = document.querySelector('form');
const topicContainer = document.querySelector('.topic-container');
const cancelBtn = document.querySelector('button.cancel');
const submitBtn = document.querySelector('button.public');

cancelBtn.addEventListener('click', cancelForm);
submitBtn.addEventListener('click', submitForm);

async function createPosts() {
    topicContainer.innerHTML = '';
    const postsData = await fetchTopics();
    if (postsData) Object.entries(postsData).forEach(post => postCreator(post[1]));
};
createPosts();

function postCreator(post) {
    const newPost = document.createElement('div');
    newPost.classList.add('topic-name-wrapper');
    newPost.innerHTML += `<div class="topic-name">
            <a href="#" class="normal" id="${post._id}">
                <h2>${post.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${new Date(post.createdOn)}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${post.username}</span></p>
                    </div>
                </div>
            </div>
        </div>`;

    newPost.querySelector('a').addEventListener('click', showPostComments);

    topicContainer.appendChild(newPost);
}

function showPostComments(event) {
    event.preventDefault();
    const targetParent = event.target.parentNode;
    renderCommentsView(targetParent.id, event.target.textContent);
}

function cancelForm(event) {
    event.preventDefault();
    form.reset();
}

function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const topicName = formData.get('topicName');
    const username = formData.get('username');
    const postText = formData.get('postText');
    const createdOn = new Date().getTime();

    if (topicName.trim() === '' || username.trim() === '' || postText.trim() === '') return;

    postTopic(topicName, username, postText, createdOn);
    form.reset();
    createPosts();
}

export { createPosts };