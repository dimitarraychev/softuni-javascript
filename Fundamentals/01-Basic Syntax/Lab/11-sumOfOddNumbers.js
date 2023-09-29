function sumOfOddNumbers(n) {
    
    let sum = 0;
    let lastNum = 1;

    for (let i = 1; i <= n; i++) {
        if (lastNum % 2 !== 0) {
            console.log(lastNum);
        }
        sum += lastNum;
        lastNum += 2;
    }

    console.log(`Sum: ${sum}`);

}

sumOfOddNumbers(5);