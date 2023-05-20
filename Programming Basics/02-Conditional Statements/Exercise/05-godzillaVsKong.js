function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let clothesPrice = Number(input[2]);
    let decor = 0.1 * budget;
    let totalClothesPrice = actors * clothesPrice;

    if (actors > 150) {
        totalClothesPrice = 0.9 * totalClothesPrice;
    }

    let totalPrice = decor + totalClothesPrice;

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }

}

godzillaVsKong(["20000", "120", "55.5"]);