function sumDigits(num) {

    let numAsStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i]);
    }

    console.log(sum);

}

sumDigits(97561);