function processOddNumbers(arr) {

    let newArr = arr.filter((a, i) => i % 2 !== 0);
    let doubleAndReverse = newArr.map(a => a * 2).reverse();

    console.log(doubleAndReverse.join(' '));
}

processOddNumbers([10, 15, 20, 25]);