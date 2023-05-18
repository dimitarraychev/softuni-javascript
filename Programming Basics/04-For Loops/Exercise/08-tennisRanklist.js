function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let pointsWon = 0;
    let wins = 0;

    for (let i = 2; i <= tournaments + 2; i++) {
        let result = input[i];
        switch (result) {
            case "W": pointsWon += 2000; wins++; break;
            case "F": pointsWon += 1200; break;
            case "SF": pointsWon += 720; break;
        }
    }

    console.log(`Final points: ${startingPoints + pointsWon}`);
    console.log(`Average points: ${Math.floor(pointsWon / tournaments)}`);
    console.log(`${((wins / tournaments) * 100).toFixed(2)}%`);

}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"]);