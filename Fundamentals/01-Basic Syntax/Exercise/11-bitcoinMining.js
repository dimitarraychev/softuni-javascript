function bitcoinMining(input) {

    const btcPrice = 11949.16;
    const goldPrice = 67.51;
    let totalCash = 0;
    let btcBought = 0;
    let isBought = false;
    let isLogged = false;
    let dayPurchased = 0;

    for (let day = 1; day <= input.length; day++) {

        let minedToday = input[day - 1];
        let cashToday = minedToday * goldPrice;

        if (day % 3 === 0) {
            cashToday *= 0.7;
        }

        totalCash += cashToday;

        if (totalCash >= btcPrice) {
            isBought = true;
            if (isLogged === false) {
                dayPurchased = day;
                isLogged = true;
            }
        }
    }

    if (isBought) {
        btcBought = Math.trunc(totalCash / btcPrice);
        totalCash -= btcBought * btcPrice;
    } else {
        btcBought = 0;
    }

    console.log(`Bought bitcoins: ${btcBought}`);

    if (dayPurchased !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayPurchased}`);
    }

    console.log(`Left money: ${totalCash.toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300]);