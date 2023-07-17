function matchFullName(text) {

    let regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/gm;
    let result = regex.exec(text);
    let output = [];

    while (result) {
        let name = result[0];
        output.push(name);

        result = regex.exec(text);
    }

    console.log(output.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov");