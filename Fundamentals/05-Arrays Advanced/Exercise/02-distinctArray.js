function distinctArray(numbers) {

    let resultArr = [];

    for (const number of numbers) {
        if (!resultArr.includes(number)) {
            resultArr.push(number);
        }
    }

    console.log(resultArr.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);