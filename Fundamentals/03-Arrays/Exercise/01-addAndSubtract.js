function addAndSubtract(arr) {

    let sumOld = 0;
    let sumNew = 0;
    let length = arr.length;

    for (let i = 0; i < length; i++) {

        sumOld += arr[i];
        arr[i] % 2 === 0 ? arr[i] += i : arr[i] -= i;
        sumNew += arr[i];
    }

    console.log(arr);
    console.log(sumOld);
    console.log(sumNew);
}

addAndSubtract([5, 15, 23, 56, 35]);