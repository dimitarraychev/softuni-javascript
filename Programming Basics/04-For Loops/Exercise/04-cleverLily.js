function cleverLily(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let moneyPerBd = 10;
    let totalMoney = 0;

    for (let currBd = 1; currBd <= age; currBd++) {
        if (currBd % 2 === 0) {
            totalMoney += moneyPerBd - 1;
            moneyPerBd += 10;
        } else {
            totalMoney += pricePerToy;
        }
    }

    if (totalMoney >= washerPrice) {
        let sumLeft = totalMoney - washerPrice
        console.log(`Yes! ${sumLeft.toFixed(2)}`);
    } else {
        let sumNeeded = washerPrice - totalMoney;
        console.log(`No! ${sumNeeded.toFixed(2)}`);
    }

}

cleverLily(["10", "170", "6"]);