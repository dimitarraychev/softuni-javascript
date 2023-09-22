function sumFirstLast(inputArr) {

    let sum = Number(inputArr.pop()) + Number(inputArr.shift());

    console.log(sum);
}

sumFirstLast(['20', '30', '40']);