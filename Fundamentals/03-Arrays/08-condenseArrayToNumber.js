function condenseArrayToNumber(arr) {

    let condensed = [];

    while (arr.length > 1) {
        
        for (let i = 0; i < arr.length - 1; i++) {
            condensed[i] = arr[i] + arr[i + 1];
        }

        arr = condensed;
        condensed = [];
    }

console.log(Number(arr));

}

condenseArrayToNumber([2, 10, 3]);