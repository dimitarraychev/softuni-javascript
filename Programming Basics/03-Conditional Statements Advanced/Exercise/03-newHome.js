function newHome(input) {

    let flower = input[0];
    let qty = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice = 0;

    switch (flower) {
        case "Roses":
            totalPrice = qty * 5;
            break;
        case "Dahlias":
            totalPrice = qty * 3.8;
            break;
        case "Tulips":
            totalPrice = qty * 2.8;
            break;
        case "Narcissus":
            totalPrice = qty * 3;
            break;
        case "Gladiolus":
            totalPrice = qty * 2.5;
            break;
    }

    if (flower === "Roses" && qty > 80) {
        totalPrice *= 0.9;
    } else if (flower === "Dahlias" && qty > 90) {
        totalPrice *= 0.85;
    } else if (flower === "Tulips" && qty > 80) {
        totalPrice *= 0.85;
    } else if (flower === "Narcissus" && qty < 120) {
        totalPrice *= 1.15;
    } else if (flower === "Gladiolus" && qty < 80) {
        totalPrice *= 1.2;
    }

    if (budget >= totalPrice) {
        let difference = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${qty} ${flower} and ${difference.toFixed(2)} leva left.`);
    } else {
        let difference = totalPrice - budget;
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
    }

}

newHome(["Roses", "55", "250"]);