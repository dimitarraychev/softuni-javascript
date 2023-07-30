function mirrorWords(input) {

    const regex = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;
    let str = input[0];
    let pairs = 0;
    let result = [];

    let match = regex.exec(str);

    while (match) {
        pairs++;
        let word1 = match.groups.word1;
        let word2 = match.groups.word2;

        let reversedWord2 = word2.split('').reverse().join('');

        if (word1 === reversedWord2) {
            result.push(`${word1} <=> ${word2}`);
        }

        match = regex.exec(str);
    }

    if (pairs === 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${pairs} word pairs found!`);
    }

    if (result.length > 0) {
        console.log('The mirror words are: ');
        console.log(`${result.join(', ')}`);
    } else {
        console.log('No mirror words!');
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);