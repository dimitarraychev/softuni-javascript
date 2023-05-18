function mountainRun (input) {
    let record = Number(input[0]);
    let meters = Number(input[1]);
    let secsPerM = Number(input[2]);

    let time = meters * secsPerM;
    let delay = Math.floor(meters / 50) * 30;
    let totalTime = time + delay;

    if (totalTime < record) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }

}

mountainRun(["10164",
"1400",
"25"]);