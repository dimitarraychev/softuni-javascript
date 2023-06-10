function factorialDivision(num1, num2) {

    function factorialNum(num) {
        if (num === 0) {
            return 1;
        } else {
            return num * factorialNum(num - 1);
        }
    }

    let numOneFactorial = factorialNum(num1);
    let numTwoFactorial = factorialNum(num2);
    let result = numOneFactorial / numTwoFactorial;

    console.log(result.toFixed(2));
}

factorialDivision(5, 2);