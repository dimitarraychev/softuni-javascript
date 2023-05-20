function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let group = Number(input[2]);

    let price = 0;

    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }

    if (group <= 6) {
        price *= 0.9;
    } else if (group <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }

    if (season !== "Autumn" && group % 2 === 0) {
        price *= 0.95;
    }

    if (price <= budget) {
        leftMoney = budget - price;
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    } else {
        needMoney = price - budget;
        console.log(`Not enough money! You need ${needMoney.toFixed(2)} leva.`);
    }

}

fishingBoat(["3000", "Summer", "11"]);