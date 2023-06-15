function searchForANumber(arr, commands) {

    let numsToTake = commands[0];
    let numsToDel = commands[1];
    let findNum = commands[2];

    let resultArr = arr.slice(0, numsToTake);
    resultArr.splice(0, numsToDel);
    let filteredArr = resultArr.filter(el => el === findNum);

    console.log(`The number ${findNum} occurs ${filteredArr.length} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);