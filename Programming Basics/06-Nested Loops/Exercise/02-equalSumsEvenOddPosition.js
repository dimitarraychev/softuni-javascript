function equalSumsEvenOddPosition(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let buffer = "";

    for (let curNum = start; curNum <= end; curNum++) {
        let evenSum = 0;
        let oddSum = 0;
        let curNumStr = String(curNum);

        for (let i = 0; i < curNumStr.length; i++) {
            let curDigit = Number(curNumStr[i]);

            if (i % 2 === 0) {
                evenSum += curDigit;
            } else {
                oddSum += curDigit;
            }
        }

        if (evenSum === oddSum) {
            buffer += curNumStr + " ";
        }

    }

    console.log(buffer);

}

equalSumsEvenOddPosition(["100000", "100050"]);