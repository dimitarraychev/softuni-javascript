function sortingNumbers(numbersArr) {

    const sortedArr = numbersArr.sort((a, b) => a - b);
    const length = sortedArr.length / 2;
    let result = [];

    for (let index = 0; index < length; index++) {
        const firstEl = sortedArr.shift();
        const lastEl = sortedArr.pop();
        result.push(firstEl, lastEl);
    }
    
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));