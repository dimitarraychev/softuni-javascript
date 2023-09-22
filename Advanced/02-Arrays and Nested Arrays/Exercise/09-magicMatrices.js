function magicMatrices(inputMatrix) {

    const length = inputMatrix.length;
    let isSame = false;
    let currColIndex = 0;

    for (let index = 0; index < length - 1; index++) {
        let currArr = inputMatrix[index];
        let nextArr = inputMatrix[index + 1];
        let currArrSum = currArr.reduce((acc, el) => acc + el);
        let nextArrSum = nextArr.reduce((acc, el) => acc + el);

        currArrSum === nextArrSum ? isSame = true : isSame = false;

        let currColSum = 0;
        let nextColSum = 0;

        for (let j = 0; j < length; j++) {
            let currColDigit = inputMatrix[j][currColIndex];
            let nextColDigit = inputMatrix[j][currColIndex + 1];

            currColSum += currColDigit;
            nextColSum += nextColDigit;
        }

        currColIndex++;

        currColSum === nextColSum ? isSame = true : isSame = false;
    }

    return isSame;
}

console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));