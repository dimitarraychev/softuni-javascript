function sumFirstAndLast(arr) {

    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());
    let sum = firstEl + lastEl;

    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);