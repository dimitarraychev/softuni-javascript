function toyShop(input) {

    let vacation = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let cashEarned = puzzle * 2.6 + doll * 3 + bear * 4.1 + minion * 8.2 + truck * 2;
    let totalCount = puzzle + doll + bear + minion + truck;

    if (totalCount >= 50) {
        cashEarned = 0.75 * cashEarned;
    }

    cashEarned = 0.9 * cashEarned;

    if (cashEarned >= vacation) {
        let moneyLeft = cashEarned - vacation;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = vacation - cashEarned;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"]);