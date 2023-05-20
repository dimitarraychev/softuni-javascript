function oscars(input) {
    
    let actor = input[0];
    let startingPts = Number(input[1]);
    let juryCount = Number(input[2]);

    for (i = 3; i < input.length; i += 2) {
        let judgeName = input[i];
        let judgePts = Number(input[i + 1]);
        let ptsWon = judgeName.length * judgePts / 2;
        startingPts += ptsWon;

        if (startingPts > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${startingPts.toFixed(1)}!`);
            break;
        }
    }

    if (startingPts <= 1250.5) {
        let ptsNeeded = 1250.5 - startingPts;
        console.log(`Sorry, ${actor} you need ${ptsNeeded.toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);