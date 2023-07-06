function censoredWords(text, word) {

    while (text.includes(word)) {
        let newText = text.replace(word, '*'.repeat(word.length));
        text = newText;
    }

    console.log(text);
}

censoredWords('A small sentence with some words', 'small');