function journey (input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let destination = "";
    let type = "";

    if (budget <= 100) {
        if (season === "summer") {
            price = budget * 0.3;
            destination = "Bulgaria";
            type = "Camp";
        } else {
            price = budget * 0.7;
            destination = "Bulgaria";
            type = "Hotel";
        }
    } else if (budget <= 1000) {
        if (season === "summer") {
            price = budget * 0.4;
            destination = "Balkans";
            type = "Camp";
        } else {
            price = budget * 0.8;
            destination = "Balkans";
            type = "Hotel";
        }   
    } else {
        price = budget * 0.9;
        destination = "Europe";
        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);

}

journey(["1500", "summer"])