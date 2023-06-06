function perfectNumber(num) {

    let divSum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            divSum += i;
        }
    }

    if (divSum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);