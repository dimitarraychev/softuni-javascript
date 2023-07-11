function pascalCaseSplitter(text) {

    let textLength = text.length;
    let splitTextArr = [];

    for (let currChar of text) {

        if (currChar.toUpperCase() === currChar) {
            splitTextArr.push(currChar);
        } else {
            splitTextArr[splitTextArr.length - 1] += currChar;
        }
    }

    console.log(splitTextArr.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');