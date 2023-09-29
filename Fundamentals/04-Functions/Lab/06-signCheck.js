function signCheck(numOne, numTwo, numThree) {

    if (numOne === 0 || numTwo === 0 || numThree === 0) {
        return;
    }

    let negative = 0;
    let positive = 0;
    let result = "";

    let numOneSign = numOne > 0 ? positive++ : negative++;
    let numTwoSign = numTwo > 0 ? positive++ : negative++;
    let numThreeSign = numThree > 0 ? positive++ : negative++;

    switch (negative) {
        case 0: result = "Positive"; break;
        case 1: result = "Negative"; break;
        case 2: result = "Positive"; break;
        case 3: result = "Negative"; break;
    }

    console.log(result);
}

signCheck(0, 12, -15);