import { postComment, fetchComments, fetchTopicById } from "./requester.js";
import { createPosts } from "./app.js";

const mainContainer = document.querySelector('.container');
const homeBtn = document.querySelector('ul li a');

async function renderCommentsView(id, title) {
    const homeView = mainContainer.querySelector('main');
    const topicInfo = await fetchTopicById(id);

    mainContainer.innerHTML = '';
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('theme-content')
    contentDiv.innerHTML += `<!-- theme-title  -->
    <div class="theme-title">
        <div class="theme-name-wrapper">
            <div class="theme-name">
                <h2>${title}</h2>
            </div>
        </div>
    </div>
    <!-- comment  -->
    <div class="comment">
    <div class="header">
    <img src="./static/profile.png" alt="avatar">
    <p><span>${topicInfo.username}</span> posted on <time>${new Date(topicInfo.createdOn)}</time></p>

    <p class="post-content">${topicInfo.postText}</p>
    </div>
    </div>
    <div class="answer-comment">
        <p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form id="${id}">
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>
    </div>`

    contentDiv.querySelector('form').addEventListener('submit', addComment);

    mainContainer.appendChild(contentDiv);
    getAllComments(id);

    homeBtn.addEventListener('click', backToHome);
    function backToHome(event) {
        mainContainer.innerHTML = '';
        mainContainer.appendChild(homeView);
    }
}

function addComment(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const postText = formData.get('postText');
    const username = formData.get('username');
    const postId = event.target.id;
    const createdOn = new Date().getTime();

    if (postText.trim() === '' || username.trim() === '') return;

    event.target.reset();
    postComment(postText, username, postId, createdOn);
    getAllComments(postId);
}

async function getAllComments(id) {
    const presentComments = document.querySelectorAll('#user-comment');
    presentComments.forEach(c => c.remove());

    const comments = await fetchComments();
    const filteredComments = Object.entries(comments).filter(comment => comment[1].postId === id);
    filteredComments.forEach(comment => createComment(comment));
}

function createComment(comment) {
    const commentsSection = document.querySelector('.comment');

    commentsSection.innerHTML += `<div id="user-comment">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${comment[1].username}</strong> commented on <time>${new Date(comment[1].createdOn)}</time></p>
            <div class="post-content">
                <p>${comment[1].postText}</p>
            </div>
        </div>
    </div>
</div>`;
}

export { renderCommentsView, addComment };