function sumOf2Numbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinations = 0;
    let isFound;

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            combinations++;
            if ((a + b) === magicNum) {
                console.log(`Combination N:${combinations} (${a} + ${b} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNum}`);
    }

}

sumOf2Numbers(["23",
"24",
"20"]);

