function charactersInRange(charOne, charTwo) {

    let charOneAscii = charOne.charCodeAt();
    let charTwoAscii = charTwo.charCodeAt();

    let startChar = Math.min(charOneAscii, charTwoAscii);
    let endChar = Math.max(charOneAscii, charTwoAscii);

    let result = [];

    for (let i = startChar + 1; i < endChar; i++) {
        let currentChar = String.fromCharCode(i);
        result.push(currentChar);
    }

    console.log(result.join(' '));
}

charactersInRange('a', 'd');