function validate() {

    const usernameRef = document.querySelector('#username');
    const emailRef = document.querySelector('#email');
    const passwordRef = document.querySelector('#password');
    const confirmPassRef = document.querySelector('#confirm-password');
    const companyCheckRef = document.querySelector('#company');
    const companyInfoRef = document.querySelector('#companyInfo');
    const companyNumberRef = document.querySelector('#companyNumber');
    const submitBtnRef = document.querySelector('#submit');
    const validDivRef = document.querySelector('#valid');

    companyCheckRef.addEventListener('change', showCompanyInfoField);
    submitBtnRef.addEventListener('click', validateInputFields);

    let isCompany = false;
    let isValidUsername = false;
    let isValidEmail = false;
    let isValidPass = false;
    let isValidCompanyInfo = false;

    function showCompanyInfoField(event) {
        if (companyCheckRef.checked) {
            companyInfoRef.style.display = 'block';
            isCompany = true;
        } else {
            companyInfoRef.style.display = 'none';
            isCompany = false;
        }
    }

    function validateInputFields(event) {
        event.preventDefault();

        (function validateUsername(username) {

            const usernameRegex = /^[A-Za-z\d]+$/g;

            if (username.length >= 3 && username.length <= 20 && username.match(usernameRegex)) {
                isValidUsername = true;
                return usernameRef.style.borderColor = '';
            }

            isValidUsername = false;
            return usernameRef.style.borderColor = 'red';
        })(usernameRef.value);

        (function validateEmail(email) {

            if (email.includes('@')) {
                const startIndex = email.indexOf('@');
                const secondPart = email.substring(startIndex);

                if (secondPart.includes('.')) {
                    isValidEmail = true;
                    return emailRef.style.borderColor = '';
                }
            }

            isValidEmail = false;
            return emailRef.style.borderColor = 'red';
        })(emailRef.value);

        (function validatePassword(password, confirmPassword) {

            const passRegex = /^\w+$/;

            const passLengthCheck = password.length >= 5 && password.length <= 15;
            const confirmPassLengthCheck = confirmPassword.length >= 5 && confirmPassword.length <= 15;
            const charCheck = password.match(passRegex) && confirmPassword.match(passRegex);

            if (passLengthCheck && confirmPassLengthCheck && charCheck && password === confirmPassword) {

                isValidPass = true;
                passwordRef.style.borderColor = '';
                return confirmPassRef.style.borderColor = '';

            }

            isValidPass = false;
            passwordRef.style.borderColor = 'red';
            return confirmPassRef.style.borderColor = 'red';
        })(passwordRef.value, confirmPassRef.value);

        if (isCompany) {
            (function validateCompanyInfo(companyNumber) {

                if (companyNumber >= 1000 && companyNumber <= 9999) {
                    isValidCompanyInfo = true;
                    return companyNumberRef.style.borderColor = '';
                }

                isValidCompanyInfo = false;
                return companyNumberRef.style.borderColor = 'red';
            })(companyNumberRef.value);
        }

        if (isValidUsername && isValidEmail && isValidPass && !isCompany) {
            return validDivRef.style.display = 'block';
        } else if (isValidUsername && isValidEmail && isValidPass && isCompany && isValidCompanyInfo) {
            return validDivRef.style.display = 'block';
        } else {
            return validDivRef.style.display = 'none';
        }
    }
}