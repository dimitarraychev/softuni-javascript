function biggerHalf(numbersArr) {

    let arrHalf = Math.round(numbersArr.length / 2);

    let result = numbersArr.sort((a, b) => a - b)
        .slice(-arrHalf);

    return result;
}

console.log(biggerHalf([4, 7, 2, 5]));