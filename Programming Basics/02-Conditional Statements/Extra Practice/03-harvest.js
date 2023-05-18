function harvest(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workers = Number(input[3]);

    let yieldInLiters = x * y * 0.4 / 2.5;

    if (yieldInLiters < z) {
        let shortage = Math.floor(z - yieldInLiters);
        console.log(`It will be a tough winter! More ${shortage} liters wine needed.`);
    } else {
        let excess = Math.ceil(yieldInLiters - z);
        let bonus = Math.ceil(excess / workers);
        console.log(`Good harvest this year! Total wine: ${Math.floor(yieldInLiters)} liters.`);
        console.log(`${excess} liters left -> ${bonus} liters per person.`);
    }

}

harvest(["650", "2", "175", "3"])