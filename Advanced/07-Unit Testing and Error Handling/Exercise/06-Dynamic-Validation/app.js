function validate() {

    const inputField = document.querySelector('#email');
    
    inputField.addEventListener('change', validateEmail);

    function validateEmail(event) {

        const regex = /[a-z]+@[a-z]+\.[a-z]+/g;

        if (!inputField.value.match(regex)) {
            inputField.classList.add('error');
        } else {
            inputField.classList.remove('error');
        }
    }
}