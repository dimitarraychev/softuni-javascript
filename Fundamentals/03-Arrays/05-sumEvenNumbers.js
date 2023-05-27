function sumEvenNumbers(numbers) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let num = Number(numbers[i]);

        if (num % 2 === 0) {
            sum += num;
        }

    }

    console.log(sum);

}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);