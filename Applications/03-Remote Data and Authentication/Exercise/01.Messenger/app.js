function attachEvents() {
    const [authorRef, contentRef, sendBtn, refreshBtn] = document.querySelectorAll('input');
    const messages = document.querySelector('#messages');
    const baseURI = 'http://localhost:3030/jsonstore/messenger';

    sendBtn.addEventListener('click', postComment);
    refreshBtn.addEventListener('click', loadComments);

    async function postComment(event) {

        const author = authorRef.value;
        const content = contentRef.value;

        if (author.trim() !== '' && content.trim() !== '') {
            const data = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ author, content })
            };

            try {
                const response = await fetch(baseURI, data);
                authorRef.value = '';
                contentRef.value = '';
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }

    async function loadComments(event) {
        try {
            const response = await fetch(baseURI);
            const data = await response.json();
            const result = [];

            Object.entries(data).forEach(e => result.push(`${e[1].author}: ${e[1].content}`));
            messages.textContent = result.join('\n');
        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();