function catWalking(input) {

    let walkMins = Number(input[0]);
    let walkQty = Number(input[1]);
    let eatenCal = Number(input[2]);

    let burntCal = (walkMins * 5) * walkQty;

    if (burntCal >= eatenCal * 0.5) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burntCal}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burntCal}.`);
    }

}

catWalking(["30", "3", "600"]);