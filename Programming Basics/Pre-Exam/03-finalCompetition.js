function finalCompetition(input) {

    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let location = input[3];
    let prize = 0;

    if (location === "Bulgaria") {
        prize = points * dancers;
        if (season === "summer") {
            prize *= 0.95;
        } else {
            prize *= 0.92;
        }
    } else {
        prize = points * dancers * 1.5;
        if (season === "summer") {
            prize *= 0.9;
        } else {
            prize *= 0.85;
        }
    }

    let charity = prize * 0.75;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${((prize * 0.25) / dancers).toFixed(2)}`);

}

finalCompetition(["25",
    "98",
    "winter",
    "Bulgaria"]);