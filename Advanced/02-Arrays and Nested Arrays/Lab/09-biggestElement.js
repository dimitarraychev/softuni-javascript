function biggestElement(inputMatrix) {

    let maxNum;

    for (const arr of inputMatrix) {
        let arrMax = arr.reduce((a, b) => Math.max(a, b)); 
        if (maxNum === undefined | arrMax > maxNum) maxNum = arrMax;
    }

    console.log(maxNum);
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]);