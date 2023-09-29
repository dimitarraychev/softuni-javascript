function sequence2kPlus1(input) {

    let index = 0;
    let num = Number(input[index]);

    let k = 1;

    while (k <= num) {
        console.log(k);
        k = k * 2 + 1;
    }

}

sequence2kPlus1(["3"]);