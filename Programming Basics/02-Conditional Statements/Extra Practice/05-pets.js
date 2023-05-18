function pets(input) {
    let days = Number(input[0]);
    let leftFood = Number(input[1]);
    let dogFood = Number(input[2]) * days;
    let catFood = Number(input[3]) * days;
    let turtleFood = Number(input[4]) * days / 1000;

    let neededFood = dogFood + catFood + turtleFood;

    if (leftFood >= neededFood ) {
        let excess = leftFood - neededFood;
        console.log(`${Math.floor(excess)} kilos of food left.`);
    } else {
        let short = neededFood - leftFood;
        console.log(`${Math.ceil(short)} more kilos of food are needed.`);
    }

}

pets(["2", "10", "1", "1", "1200"]);