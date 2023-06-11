function sorting(numbers) {

    let sortedArray = numbers.sort((a, b) => b - a);
    let resultArray = [];
    let length = numbers.length;

    for (let i = 0; i < length / 2; i++) {

        let maxNum = sortedArray.shift();
        let minNum = sortedArray.pop();
        
        resultArray.push(maxNum);
        resultArray.push(minNum)
    }

    console.log(resultArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);