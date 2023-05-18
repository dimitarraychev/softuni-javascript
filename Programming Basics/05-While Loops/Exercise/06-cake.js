function cake(input) {

    let index = 0;
    let cakeW = Number(input[index]);
    index++;
    let cakeL = Number(input[index]);
    index++;
    let totalPieces = cakeW * cakeL;
    let command = input[index];
    index++;

    while (command !== "STOP") {
        let pieces = Number(command);

        if (totalPieces - pieces > 0) {
            totalPieces -= pieces;
        } else {
            let pcsNeeded = pieces - totalPieces;
            console.log(`No more cake left! You need ${pcsNeeded} pieces more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "STOP") {
        console.log(`${totalPieces} pieces are left.`);
    }

}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

