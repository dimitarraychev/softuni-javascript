function negativeOrPositiveNumbers(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currNum = Number(arr[i]);

        if (currNum >= 0) {
            result.push(currNum);
        } else {
            result.unshift(currNum);
        }
    }

    console.log(result.join("\n"));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);