function countStringOccurences(text, str) {

    let count = 0;
    let arr = text.split(' ');

    for (const word of arr) {

        if (word === str) {
            count++;
        }
    }

    console.log(count);
}

countStringOccurences('This is a word and it also is a sentence',
    'is');