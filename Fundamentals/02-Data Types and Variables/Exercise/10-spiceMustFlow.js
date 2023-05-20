function spiceMustFlow(startingYield) {

    let workersFee = 26;
    let yield = startingYield;
    let days = 0;
    let totalAmount = 0;

    while (yield >= 100) {
        days++;
        totalAmount += yield;
        totalAmount -= workersFee;
        yield -= 10;
    }

    if (totalAmount >= workersFee) {
        totalAmount -= workersFee;
    }

    console.log(`${days}`);
    console.log(`${totalAmount}`);

}

spiceMustFlow(111);