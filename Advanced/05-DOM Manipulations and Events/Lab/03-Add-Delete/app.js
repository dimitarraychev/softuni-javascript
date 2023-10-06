function addItem() {

    const list = document.querySelector('#items');
    const inputText = document.querySelector('#newItemText');

    let newListItem = document.createElement('li');
    newListItem.textContent = inputText.value;

    let deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';
    deleteButton.addEventListener('click', deleteItem);

    newListItem.appendChild(deleteButton);
    list.appendChild(newListItem);
    inputText.value = '';

    function deleteItem(event) {
        event.target.parentElement.remove();
    }
}