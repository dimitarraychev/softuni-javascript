function cutAndReverse(text) {

    // Without build in methods for Arrays

    let textLength = text.length;
    let firstHalf = '';
    let secondHalf = '';

    for (let i = textLength - 1; i >= 0; i--) {
        let currChar = text[i];

        if (textLength / i <= 2) {
            secondHalf += currChar;
        } else {
            firstHalf += currChar;
        }
    }

    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');