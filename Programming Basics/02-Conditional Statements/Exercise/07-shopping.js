function shopping(input) {

    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let rams = Number(input[3]);
    
    let videoCardsPrice = videoCards * 250;
    let processorsPrice = processors * (0.35 * videoCardsPrice);
    let ramsPrice = rams * (0.1 * videoCardsPrice);
    let totalPrice = videoCardsPrice + processorsPrice + ramsPrice;

    if (videoCards > processors) {
        totalPrice = 0.85 * totalPrice;
    }

    if (totalPrice <= budget) {
        let moneyLeft = budget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }


}

shopping(["920.45", "3", "1", "1"]);