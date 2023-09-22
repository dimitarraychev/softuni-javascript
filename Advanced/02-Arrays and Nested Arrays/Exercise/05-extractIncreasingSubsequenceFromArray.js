function extractIncreasingSubsequenceFromArray(numbersArr) {

    let biggestNum;

    let result = numbersArr.reduce((acc, el) => {
        if (biggestNum === undefined || el >= biggestNum) { 
            biggestNum = el;
            acc.push(el);
        }    
        return acc;    
    }, []);

    return result;
}

console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10, 
    12, 
    3, 
    2, 
    24]));