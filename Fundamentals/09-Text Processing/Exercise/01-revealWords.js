function revealWords(words, text) {

    let wordsArr = words.split(', ');

    for (const word of wordsArr) {

        let buffer = '*'.repeat(word.length);

        if (text.includes(buffer)) {
            text = text.replace(buffer, word);
        }
    }

    return text;
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');