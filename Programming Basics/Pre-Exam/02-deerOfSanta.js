function deerOfSanta(input) {
    
    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let d1FoodPerDay = Number(input[2]);
    let d2FoodPerDay = Number(input[3]);
    let d3FoodPerDay = Number(input[4]);

    let d1 = d1FoodPerDay * days;
    let d2 = d2FoodPerDay * days;
    let d3 = d3FoodPerDay * days;
    let eatenFood = d1 + d2 + d3;

    if (totalFood >= eatenFood) {
        console.log(`${Math.floor(totalFood - eatenFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(eatenFood - totalFood)} more kilos of food are needed.`);
    }

}

deerOfSanta(["5",
    "10",
    "2.1",
    "0.8",
    "11"]);

