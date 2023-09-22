function evenPosisitonElement(inputArr) {

    let result = inputArr.filter((element, index) => index % 2 === 0)
        .join(' ');

    console.log(result);
}

evenPosisitonElement(['20', '30', '40', '50', '60']);