function foodForPets(input) {

    let index = 0;
    let days = Number(input[index]);
    index++;
    let totalFood = Number(input[index]);
    index++;

    let eatenCat = 0;
    let eatenDog = 0;
    let eatenBisc = 0;

    for (let i = 1; i <= days; i++) {
        let dogFood = Number(input[index]);
        index++;
        let catFood = Number(input[index]);
        index++;
        eatenDog += dogFood;
        eatenCat += catFood;
        if (Math.floor(i / 3) - (i / 3) === 0) {
            eatenBisc += 0.1 * (dogFood + catFood);
        }

    }
    let totalPercent = ((eatenCat + eatenDog) / totalFood) * 100;
    let dogPercent = (eatenDog / (eatenCat + eatenDog)) * 100;
    let catPercent = (eatenCat / (eatenCat + eatenDog)) * 100;

    console.log(`Total eaten biscuits: ${Math.round(eatenBisc)}gr.`);
    console.log(`${totalPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catPercent.toFixed(2)}% eaten from the cat.`);
    
}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);