function attachEvents() {
    const [loadBtn, createBtn] = document.querySelectorAll('button');
    const [nameRef, phoneRef] = document.querySelectorAll('input');
    const phonebook = document.querySelector('#phonebook');
    const baseURI = 'http://localhost:3030/jsonstore/phonebook';

    loadBtn.addEventListener('click', loadContacts);
    createBtn.addEventListener('click', createContact);

    async function loadContacts(event) {
        try {
            const response = await fetch(baseURI);
            const data = await response.json();

            phonebook.innerHTML = '';

            Object.entries(data).forEach(e => createNewLi(e[1].person, e[1].phone, e[1]._id));
        } catch (error) {
            console.log(error);
        }
    }

    async function createNewLi(person, phone, id) {
        await person, phone, id;

        const li = document.createElement('li');
        li.textContent = `${person}: ${phone}`;
        li.id = id;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteContact);
        li.appendChild(deleteBtn);

        phonebook.appendChild(li);
    }

    async function deleteContact(event) {
        const currContact = event.target.parentNode;

        try {
            const response = await fetch(baseURI + '/' + currContact.id, { method: 'DELETE' });
            currContact.remove();
        } catch (error) {
            console.log(error);
        }
    }

    async function createContact(event) {
        const person = nameRef.value;
        const phone = phoneRef.value;

        if (person.trim() === '' || phone.trim() === '') return;

        const data = {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ person, phone })
        };

        try {
            const response = await fetch(baseURI, data);

            nameRef.value = '';
            phoneRef.value = '';

            loadContacts();
        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();