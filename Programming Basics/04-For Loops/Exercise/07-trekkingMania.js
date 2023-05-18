function trekkingMania(input) {
    let numOfGroups = Number(input)[0];
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;
    let totalPpl = 0;

    for (i = 1; i < input.length; i++) {
        let people = Number(input[i]);

        if (people <= 5) {
            group1 += people;
            totalPpl += people;
        } else if (people <= 12) {
            group2 += people;
            totalPpl += people;
        } else if (people <= 25) {
            group3 += people;
            totalPpl += people;
        } else if (people <= 40) {
            group4 += people;
            totalPpl += people;
        } else {
            group5 += people;
            totalPpl += people;
        }
    }

    g1p = group1 / totalPpl * 100;
    g2p = group2 / totalPpl * 100;
    g3p = group3 / totalPpl * 100;
    g4p = group4 / totalPpl * 100;
    g5p = group5 / totalPpl * 100;

    console.log(`${g1p.toFixed(2)}% \n ${g2p.toFixed(2)}% \n ${g3p.toFixed(2)}% \n ${g4p.toFixed(2)}% \n ${g5p.toFixed(2)}%`);


}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])