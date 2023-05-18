function matchTickets (input) {
    let budget = Number(input[0]);
    let cat = input[1];
    let people = Number(input[2]);
    let transport = 0;
    let price = 0;

    switch (cat) {
        case "Normal":
            price = 249.99;
            break;
        case "VIP":
            price = 499.99;
            break;
    }

    if (people <= 4){
        transport = budget * 0.75;                
    } else if (people <= 9) {
        transport = budget * 0.60; 
    } else if (people <= 24) {
        transport = budget * 0.50; 
    } else if (people <= 49){
        transport = budget * 0.40; 
    } else {
        transport = budget * 0.25; 
    }

    if (budget >= transport + price * people) {
        let moneyLeft = budget - (transport + price * people);
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let notEnough = (transport + price * people) - budget;
        console.log(`Not enough money! You need ${notEnough.toFixed(2)} leva.`);
    }
}

matchTickets(["30000", "VIP", "49"]);
