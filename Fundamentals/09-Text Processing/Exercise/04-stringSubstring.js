function stringSubstring(word, text) {

    let textArr = text.split(' ');
    let isNotValid = false;

    for (const line of textArr) {

        if (line.toLowerCase() === word.toLowerCase()) {
            return word;
        } else {
            isNotValid = true;
        }
    }

    if (isNotValid) {
        console.log(`${word} not found!`);
    }
}

stringSubstring('python',
    'JavaScript is the best programming language');