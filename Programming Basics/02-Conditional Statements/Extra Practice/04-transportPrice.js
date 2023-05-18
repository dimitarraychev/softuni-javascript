function transportPrice(input) {
    let n = Number(input[0]);
    let dayOrNight = input[1];
    let price = 0;
    if (n < 20 && dayOrNight === "day") {
        price = 0.79 * n + 0.7;
    } else if (n < 20 && dayOrNight === "night") {
        price = 0.9 * n + 0.7;
    } else if (n >= 100 ) {
        price = 0.06 * n;
    } else {
        price = 0.09 * n;
    }
    console.log(price.toFixed(2));
}

transportPrice(["5", "day"]);