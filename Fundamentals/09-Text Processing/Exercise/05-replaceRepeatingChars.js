function replaceRepeatingChars(text) {

    let textLength = text.length;
    let output = '';

    for (let i = 0; i < textLength; i++) {
        let currChar = text[i];
        let nextChar = text[i + 1];

        if (currChar !== nextChar) {
            output += currChar;
        }
    }

    return output;
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');