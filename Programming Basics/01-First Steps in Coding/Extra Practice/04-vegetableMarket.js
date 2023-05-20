function vegetableMarket(input) {

    let kgVeggies = Number(input[0]);
    let kgFruits = Number(input[1]);
    let totalVeggies = Number(input[2]);
    let totalFruits = Number(input[3]);

    console.log(((kgVeggies * totalVeggies + kgFruits * totalFruits) / 1.94).toFixed(2));

}

vegetableMarket(["0.194", "19.4", "10", "10"]);