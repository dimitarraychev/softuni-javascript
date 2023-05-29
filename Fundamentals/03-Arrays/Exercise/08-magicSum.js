function magicSum(arr, sum) {
    
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let currNum = arr[i];

        for (let j = i + 1; j < length; j++) {
            let nextNum = arr[j];

            if (currNum + nextNum === sum) {
                console.log(`${currNum} ${nextNum}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);