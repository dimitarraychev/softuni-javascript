function evenAndOddSubtraction(numbers) {

    let sumEven = 0;
    let sumOdd = 0;

    for (numAsStr of numbers) {
        num = Number(numAsStr);
        num % 2 === 0 ? sumEven += num : sumOdd += num;
    }

    console.log(sumEven - sumOdd);

}

evenAndOddSubtraction([3, 5, 7, 9]);