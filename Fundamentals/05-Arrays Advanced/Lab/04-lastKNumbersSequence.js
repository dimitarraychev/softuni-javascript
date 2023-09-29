function lastKNumbersSequence(n, k) {

    let arr = [1];

    while (arr.length < n) {

        let sum = 0;
        let newArr = arr.slice(-k);

        for (let i = 0; i < newArr.length; i++) {
            let currNum = Number(newArr[i]);
            sum += currNum;
        }

        arr.push(sum);
    }

    console.log(arr.join(' '));
}

lastKNumbersSequence(6, 3);