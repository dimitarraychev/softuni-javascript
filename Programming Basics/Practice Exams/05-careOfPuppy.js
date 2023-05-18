function careOfPuppy(input) {
    let index = 0;
    let boughtFood = input[index] * 1000;
    index++;
    let command = input[index];
    index++;
    let eatenFood = 0;

    while (command !== "Adopted") {
        let food = Number(command);
        eatenFood += food;
        command = input[index];
        index++;
    }

    if (eatenFood <= boughtFood) {
        let left = boughtFood - eatenFood;
        console.log(`Food is enough! Leftovers: ${left} grams.`);
    } else {
        let need = eatenFood - boughtFood;
        console.log(`Food is not enough. You need ${need} grams more.`);
    }

}

careOfPuppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"]);