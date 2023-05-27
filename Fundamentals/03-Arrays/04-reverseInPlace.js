function reverseInPlace(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let posStart = arr[i];
        let posEnd = arr[arr.length - 1 - i];
        arr[i] = posEnd;
        arr[arr.length - 1 - i] = posStart;
    }

    console.log(arr.join(" "));

}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);