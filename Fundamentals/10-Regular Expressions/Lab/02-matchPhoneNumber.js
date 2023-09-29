function matchPhoneNumber(text) {

    let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/gm;
    let result = regex.exec(text);
    let output = [];

    while (result) {
        let phoneNumber = result[0];
        output.push(phoneNumber);

        result = regex.exec(text);
    }

    console.log(output.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
