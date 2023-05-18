function sleepyTomCat(input) {
    let daysOff = Number(input[0]);
    let workDays = 365 - daysOff;
    let play1 = workDays * 63;
    let play2 = daysOff * 127;
    let totalPlay = play1 + play2;

    if (totalPlay > 30000) {
        let more = totalPlay - 30000;
        let moreHours = Math.floor(more / 60);
        let moreMins = more % 60;
        console.log("Tom will run away");
        console.log(`${moreHours} hours and ${moreMins} minutes more for play`);
    } else {
        let less = 30000 - totalPlay;
        let lessHours = Math.floor(less / 60);
        let lessMins = less % 60;
        console.log("Tom sleeps well");
        console.log(`${lessHours} hours and ${lessMins} minutes less for play`);
    }

}

sleepyTomCat(["113"])