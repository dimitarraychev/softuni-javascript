function workout(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let kmDay1 = Number(input[index]);
    index++;
    let kmPerDay = 0;
    let kmLastDay = kmDay1;
    let totalKm = kmDay1;

    for (let i = 0; i < days; i++) {
        let increasePerDay = Number(input[index]);
        index++;
        kmPerDay = kmLastDay * ((increasePerDay + 100) / 100);
        totalKm += kmPerDay;
        kmLastDay = kmPerDay;
    }

    if (totalKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalKm - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKm)} more kilometers`);
    }

}

workout(["5",
"30",
"10",
"15",
"20",
"5",
"12"]);