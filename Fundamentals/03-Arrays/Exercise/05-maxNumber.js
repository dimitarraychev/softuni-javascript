function maxNumber(arr) {

    let topIntegers = [];
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let currNum = arr[i];
        let isMax = true;

        for (let j = i + 1; j < length; j++) {
            let nextNum = arr[j];

            if (currNum <= nextNum) {
                isMax = false;
                break;
            }
        }

        if (isMax) {
            topIntegers.push(currNum)
        }
    }

    console.log(topIntegers.join(" "));
}

maxNumber([1, 4, 3, 2]);