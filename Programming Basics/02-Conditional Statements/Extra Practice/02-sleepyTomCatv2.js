function sleepyTomCat(input) {
    let daysOff = Number(input[0]);
    let workDays = 365 - daysOff;
    let play1 = workDays * 63;
    let play2 = daysOff * 127;
    let totalPlay = play1 + play2;

    let difference = Math.abs(totalPlay - 30000);
    let hours = Math.floor(difference / 60);
    let mins = difference % 60;

    if (totalPlay > 30000) {
        console.log("Tom will run away");
        console.log(`${hours} hours and ${mins} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${mins} minutes less for play`);
    }

}

sleepyTomCat(["113"])