function timePlus15mins(input) {
    let hours = Number(input[0]);
    let mins = Number(input[1]);

    let minsFromHours = hours * 60;
    let totalTime = minsFromHours + mins + 15;

    let totalHours = Math.floor(totalTime / 60);
    let totalMins = totalTime % 60;

    if (totalHours === 24) {
        totalHours = 0;
    }

    if (totalMins < 10) {
        console.log(`${totalHours}:0${totalMins}`);
    } else {
        console.log(`${totalHours}:${totalMins}`);
    }

}
timePlus15mins(["1", "46"])