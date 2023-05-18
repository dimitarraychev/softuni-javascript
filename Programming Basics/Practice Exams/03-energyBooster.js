function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let qty = Number(input[2]);
    let price = 0;

    if (size === "small") {
        switch (fruit) {
            case "Watermelon":
                price = 56 * qty * 2;
                break;
            case "Mango":
                price = 36.66 * qty * 2;
                break;
            case "Pineapple":
                price = 42.10 * qty * 2;
                break;
            case "Raspberry":
                price = 20 * qty * 2;
                break;
        }
    } else if (size === "big") {
        switch (fruit) {
            case "Watermelon":
                price = 28.70 * qty * 5;
                break;
            case "Mango":
                price = 19.60 * qty * 5;
                break;
            case "Pineapple":
                price = 24.80 * qty * 5;
                break;
            case "Raspberry":
                price = 15.20 * qty * 5;
                break;
        }
    }

    if (price >= 400 && price <= 1000) {
        price *= 0.85;
    } else if (price > 1000) {
        price *= 0.5;
    }
    console.log(`${price.toFixed(2)} lv.`);
}

energyBooster(["Watermelon", "big", "4"]);