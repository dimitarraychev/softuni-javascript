function oddAndEvenSum(num) {

    let oddSum = 0;
    let evenSum = 0;
    
    let numToStr = num.toString();

    for (let i = 0; i < numToStr.length; i++) {
        let currNum = Number(numToStr[i]);

        currNum % 2 === 0 ? evenSum += currNum : oddSum += currNum;
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);