function deleteByEmail() {

    const emails = document.querySelectorAll('table tbody tr td:nth-Child(even)');
    const inputText = document.querySelector('input');
    const resultField = document.querySelector('#result');

    let isFound;

    for (const email of emails) {
        if (email.textContent.includes(inputText.value)) {
            email.parentElement.remove();
            resultField.textContent = 'Deleted.';
            isFound = true;
        }
    }

    if (isFound !== true) resultField.textContent = 'Not found.';
    inputText.value = '';
}