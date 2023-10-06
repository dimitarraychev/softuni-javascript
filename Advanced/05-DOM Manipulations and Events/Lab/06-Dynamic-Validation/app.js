function validate() {
    
    const inputEmail = document.querySelector('#email');
    const regex = /[a-z]+\@[a-z]+\.[a-z]+/gm;

    inputEmail.addEventListener('change', validateEmail);

    function validateEmail(event) {  
        inputEmail.className = inputEmail.value.match(regex) ? '' : 'error';
    }
}