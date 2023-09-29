function addItem() {

    const list = document.querySelector('#items');
    const inputText = document.querySelector('#newItemText');

    let newListItem = document.createElement('li')
    newListItem.textContent = inputText.value;

    list.appendChild(newListItem);
    inputText.value = '';
}