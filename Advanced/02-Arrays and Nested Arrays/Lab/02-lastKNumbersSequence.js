function lastKNumbersSequence(n, k) {

    let outputArr = [1];

    while (outputArr.length !== n) {
        let nextNum = outputArr.slice(-k)
            .reduce((a, b) => a + b);
            
        outputArr.push(nextNum);
    }

    return outputArr;
}

console.log(lastKNumbersSequence(8, 2));