function focused() {

    const divs = document.querySelectorAll('div div');
    const inputFields = document.querySelectorAll('input');


    for (const input of inputFields) {
        input.addEventListener('focus', inputFocus);
        input.addEventListener('blur', inputBlur);
    }

    function inputFocus(event) {
        const targetedElement = event.target.parentNode;
        targetedElement.classList.add('focused');
    }

    function inputBlur(event) {
        const targetedElement = event.target.parentNode;
        targetedElement.classList.remove('focused');
    }
}