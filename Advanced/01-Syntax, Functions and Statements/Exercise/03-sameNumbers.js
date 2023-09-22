function sameNumbers(num) {

    let str = num.toString();
    let firstChr = str[0];
    let sum = 0;
    let isSame = true;

    for (const char of str) {
        sum += +char;

        if (char !== firstChr) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);