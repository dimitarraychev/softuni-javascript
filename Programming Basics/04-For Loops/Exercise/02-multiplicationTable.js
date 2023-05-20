function multiplicationTable(input) {
    
    let num = Number(input[0]);

    for (let multiplier = 1; multiplier <= 10; multiplier++) {
        console.log(`${multiplier} * ${num} = ${multiplier * num}`);
    }

}

multiplicationTable(["5"]);