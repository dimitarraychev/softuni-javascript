function passwordReset(input) {

    let password = input.shift();

    let parserObject = {
        'TakeOdd': (password) => {
            return [...password].filter((el, index) => index % 2 !== 0).join('');
        },
        'Cut': (password, index, length) => {
            let substr = password.substring(index, +index + +length);
            return password.replace(substr, '');
        },
        'Substitute': (password, substring, substitute) => {
            if (password.includes(substring)) {
                return password.replace(new RegExp(substring, 'g'), substitute);
            }
            console.log("Nothing to replace!");
            return password;
        }
    }

    for (const line of input) {

        if (line !== "Done") {
            let [action, ...tokens] = line.split(" ");
            let oldPassword = password;

            password = parserObject[action](password, ...tokens);

            if (oldPassword !== password) {
                console.log(password);
            }
        }
    }

    console.log("Your password is: " + password);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);