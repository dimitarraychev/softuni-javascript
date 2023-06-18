function theHuntingGames(arr) {

    let data = arr.map(Number);
    let days = data.shift();
    let players = data.shift();
    let totalEnergy = data.shift();
    let water = data.shift() * players * days;
    let food = data.shift() * players * days;

    for (let i = 0; i < days; i++) {
        let dailyEnergy = data[i];

        if (totalEnergy - dailyEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
            totalEnergy -= dailyEnergy;
            break;
        }

        totalEnergy -= dailyEnergy;

        if ((i + 1) % 2 === 0) {
            totalEnergy *= 1.05;
            water *= 0.7;
        }

        if ((i + 1) % 3 === 0) {
            food -= food / players;
            totalEnergy *= 1.1;
        }
    }

    if (totalEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${totalEnergy.toFixed(2)} energy!`);
    }
}

theHuntingGames(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"]);