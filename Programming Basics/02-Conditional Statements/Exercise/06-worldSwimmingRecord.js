function worldSwimmingRecord(input) {

    let record = Number(input[0]);
    let meters = Number(input[1]);
    let secsPerMeter = Number(input[2]);

    let time = meters * secsPerMeter;
    let resistance = Math.floor(meters / 15) * 12.5;
    let totalTime = time + resistance;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let leftTime = totalTime - record;
        console.log(`No, he failed! He was ${leftTime.toFixed(2)} seconds slower.`);
    }

}

worldSwimmingRecord(["10464", "1500", "20"]);