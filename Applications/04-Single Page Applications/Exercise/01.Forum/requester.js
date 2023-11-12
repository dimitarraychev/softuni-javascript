const postsURI = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const commentsURI = 'http://localhost:3030/jsonstore/collections/myboard/comments';

async function fetchTopics() {
    try {
        const response = await fetch(postsURI);
        if (response.status !== 200) throw new Error();
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

async function fetchTopicById(id) {
    try {
        const response = await fetch(postsURI + '/' + id);
        if (response.status !== 200) throw new Error();
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

async function postTopic(topicName, username, postText, createdOn) {
    const data = {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicName, username, postText, createdOn })
    };

    try {
        const response = await fetch(postsURI, data);
        if (response.status !== 200) throw new Error();
        const responseData = await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function fetchComments() {
    try {
        const response = await fetch(commentsURI);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

async function postComment(postText, username, postId, createdOn) {
    const data = {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postText, username, postId, createdOn })
    };

    try {
        const response = await fetch(commentsURI, data);
        if (response.status !== 200) throw new Error();
        const responseData = await response.json();
    } catch (error) {
        console.log(error);
    }
}

export { fetchTopics, postTopic, fetchComments, postComment, fetchTopicById };