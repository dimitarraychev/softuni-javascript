function orders(product, qty) {

    let price = 0;

    switch (product) {
        case "coffee": price = 1.5; break;
        case "water": price = 1; break;
        case "coke": price = 1.4; break;
        case "snacks": price = 2; break;
    }

    console.log((price * qty).toFixed(2));
}

orders("water", 5);