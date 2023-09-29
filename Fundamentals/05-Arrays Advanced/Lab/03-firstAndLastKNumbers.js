function firstAndLastKNumbers(arr) {

    let k = arr.shift();
    let firstKNums = arr.slice(0, k);
    let lastKNums = arr.slice(-k);
    console.log(firstKNums.join(' '));
    console.log(lastKNums.join(' '));
}

firstAndLastKNumbers([2,  7, 8, 9]);