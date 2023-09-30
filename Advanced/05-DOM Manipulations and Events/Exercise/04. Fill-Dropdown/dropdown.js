function addItem() {
    
    const newItemTextRef = document.querySelector('#newItemText');
    const newItemValueRef = document.querySelector('#newItemValue');
    const selectMenuRef = document.querySelector('#menu');
    
    const newOption = document.createElement('option');
    newOption.textContent = newItemTextRef.value;
    newOption.value = newItemValueRef.value;

    selectMenuRef.appendChild(newOption);
    newItemTextRef.value = '';
    newItemValueRef.value = '';
}