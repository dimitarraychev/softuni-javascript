const loadBtn = document.querySelector('#loadBooks');
const tableBody = document.querySelector('tbody');
const formRef = document.querySelector('form');
const uri = 'http://localhost:3030/jsonstore/collections/books';

loadBtn.addEventListener('click', fetchBooks);
formRef.querySelector('button').addEventListener('click', createBook);

async function fetchBooks(event) {
    try {
        const response = await fetch(uri);
        if (response.status !== 200) throw new Error('Error occured when fetching data!');
        const data = await response.json();

        tableBody.innerHTML = '';
        Object.entries(data).forEach(e => createTr(e[1].author, e[1].title, e[0]));
    } catch (error) {
        console.log(error);
    }
}

async function createTr(author, title, id) {
    await author, title, id;

    const tr = document.createElement('tr');
    tr.innerHTML += `<td>${title}</td><td>${author}</td>`;
    const buttonsTd = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.value = id;
    editBtn.addEventListener('click', editBook);
    buttonsTd.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.value = id;
    deleteBtn.addEventListener('click', deleteBook);
    buttonsTd.appendChild(deleteBtn);

    tr.appendChild(buttonsTd);
    tableBody.appendChild(tr);
}

async function deleteBook(event) {
    const currTarget = event.target.parentNode;
    const id = event.target.value;

    try {
        const response = await fetch(uri + '/' + id, { method: 'DELETE' });
        if (response.status !== 200) throw new Error('Error occured when deleting book!');
        fetchBooks();
    } catch (error) {
        console.log(error);
    }
}

function editBook(event) {
    const currTarget = event.target.parentNode.parentNode;
    const id = event.target.value;

    const [titleRef, authorRef, btnsRef] = currTarget.querySelectorAll('td');
    const [formTitleRef, formAuthorRef] = formRef.querySelectorAll('input');
    formTitleRef.value = titleRef.textContent;
    formAuthorRef.value = authorRef.textContent;
    formRef.querySelector('h3').textContent = 'Edit FORM';

    const button = formRef.querySelector('button');
    button.textContent = 'Save';
    button.removeEventListener('click', createBook);
    button.addEventListener('click', sendEditedBook);

    async function sendEditedBook(event) {
        event.preventDefault();

        const author = formAuthorRef.value;
        const title = formTitleRef.value;

        if (title.trim() === '' || author.trim() === '') return;

        const data = {
            method: 'PUT',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author, title })
        };

        try {
            const response = await fetch(uri + '/' + id, data);
            if (response.status !== 200) throw new Error('Error occured when updating book info!');

            button.textContent = 'Submit';
            button.removeEventListener('click', sendEditedBook);
            button.addEventListener('click', createBook);

            formRef.querySelector('h3').textContent = 'FORM';
            formRef.reset();
            fetchBooks();
        } catch (error) {
            console.log(error);
        }
    }
}

async function createBook(event) {
    event.preventDefault();

    const form = new FormData(formRef);
    const title = form.get('title');
    const author = form.get('author');

    if (title.trim() === '' || author.trim() === '') return;

    const data = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, title })
    };

    try {
        const response = await fetch(uri, data);
        if (response.status !== 200) throw new Error('Error occured when creating new book!');
        formRef.reset();
        fetchBooks();
    } catch (error) {
        console.log(error);
    }
}