function trainingLab(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);
    let desks = parseInt((h * 100 - 100) / 70);
    let rows = parseInt((15 * 100) / 120);
    
    console.log(desks * rows - 3);
}

trainingLab(["15", "8.9"]);