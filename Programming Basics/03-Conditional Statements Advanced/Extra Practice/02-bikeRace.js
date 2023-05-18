function bikeRace (input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let track = input[2];
    let jrTax = 0;
    let srTax = 0;
    
    switch (track) {
        case "trail":
            jrTax = 5.50 * juniors;
            srTax = 7 * seniors;
            break;
        case "cross-country":
            jrTax = 8 * juniors;
            srTax = 9.50 * seniors;
            break;
        case "downhill":
            jrTax = 12.25 * juniors;
            srTax = 13.75 * seniors;
            break;
        case "road":
            jrTax = 20 * juniors;
            srTax = 21.50 * seniors;
            break;
    }

    if (track === "cross-country" && juniors + seniors >= 50) {
        jrTax *= 0.75;
        srTax *= 0.75;
    }

    let donation = (jrTax + srTax) * 0.95;
    console.log(`${donation.toFixed(2)}`);

}

bikeRace(["21", "26", "cross-country"]);