const uri = 'http://localhost:3030/jsonstore/collections/students';
const table = document.querySelector('#results tbody');
const formRef = document.querySelector('form');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', createStudent);

async function fetchStudents() {
    try {
        const response = await fetch(uri);
        const data = await response.json();
        table.innerHTML = '';
        Object.entries(data).forEach(e => createListItem(e[1].firstName, e[1].lastName, e[1].facultyNumber, e[1].grade));
    } catch (error) {
        console.log(error);
    }
}
fetchStudents();

async function createListItem(firstName, lastName, facultyNumber, grade) {
    await firstName, lastName, facultyNumber, grade;

    const tr = document.createElement('tr');

    const tdOne = document.createElement('td');
    tdOne.textContent = firstName;
    tr.appendChild(tdOne);

    const tdTwo = document.createElement('td');
    tdTwo.textContent = lastName;
    tr.appendChild(tdTwo);

    const tdThree = document.createElement('td');
    tdThree.textContent = facultyNumber;
    tr.appendChild(tdThree);

    const tdFour = document.createElement('td');
    tdFour.textContent = grade;
    tr.appendChild(tdFour);

    table.appendChild(tr);
}

async function createStudent(event) {
    event.preventDefault();

    const form = new FormData(formRef);
    const firstName = form.get('firstName');
    const lastName = form.get('lastName');
    const facultyNumber = form.get('facultyNumber');
    const grade = form.get('grade');

    if (firstName.trim() === '' || lastName.trim() === '' ||
        facultyNumber.trim() === '' || grade.trim() === '') return;

    const data = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    }

    try {
        const response = await fetch(uri, data);
        formRef.reset();
        fetchStudents();
    } catch (error) {
        console.log(error);
    }
}