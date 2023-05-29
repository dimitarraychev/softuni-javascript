function equalSums(arr) {

    let length = arr.length;
    let leftSum = 0;
    let isPresent = false;

    for (let i = 0; i < length; i++) {

        let currNum = arr[i];
        let rigthSum = 0;

        for (let j = i + 1; j < length; j++) {
            rigthSum += arr[j];
        }

        if (leftSum === rigthSum) {
            console.log(i);
            isPresent = true;
        }

        leftSum += currNum;
    }

    if (!isPresent) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3]);