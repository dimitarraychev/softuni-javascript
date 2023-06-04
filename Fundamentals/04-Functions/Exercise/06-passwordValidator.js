function passwordValidator(pass) {

    let passLength = pass.length;
    let isValid = true;
    let digits = 0;

    if (pass.length < 6 || passLength > 10) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    for (let i = 0; i < passLength; i++) {

        let currChar = pass[i];
        let currCharAscii = currChar.charCodeAt();

        let smallLettersCheck = false;
        let bigLettersCheck = false;
        let numbersCheck = false;
        let isNumbersAndLetters = false;

        if (currCharAscii >= 97 && currCharAscii <= 122) {
            smallLettersCheck = true;
        } else if (currCharAscii >= 65 && currCharAscii <= 90) {
            bigLettersCheck = true;
        } else if (currCharAscii >= 48 && currCharAscii <= 57) {
            numbersCheck = true;
            digits++;
        }

        if (smallLettersCheck || bigLettersCheck || numbersCheck) {
            isNumbersAndLetters = true;
        }

        if (!isNumbersAndLetters) {
            isValid = false;
            console.log("Password must consist only of letters and digits");
            break;
        }
    }

    if (digits < 2) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

passwordValidator('MyPass123');