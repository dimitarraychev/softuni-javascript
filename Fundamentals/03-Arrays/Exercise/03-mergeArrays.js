function mergeArrays(arr1, arr2) {

    let length = arr1.length;
    let outputArr = [];

    for (let i = 0; i < length; i++) {

        if (i % 2 === 0) {
            outputArr[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            outputArr[i] = arr1[i] + arr2[i];
        }
    }

    console.log(outputArr.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);