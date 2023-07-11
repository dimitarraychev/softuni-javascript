function modernTimesOfHashTag(text) {

    let wordsArr = text.split(' ');

    for (let word of wordsArr) {

        let startsWithHashtag = word[0] === '#';
        let wordLength = word.length;

        if (startsWithHashtag && wordLength > 1) {
            word = word.substring(1);
            let wordForChecks = word.toLowerCase();
            let isValid = true;

            for (let i = 0; i < wordLength - 1; i++) {
                let letterToAscii = wordForChecks.charCodeAt(i);

                if (!(letterToAscii > 60 && letterToAscii < 123)) {
                    isValid = false;
                }
            }

            if (isValid) {
                return word;
            }
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');