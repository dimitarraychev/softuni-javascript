function lunchBreak(input) {
    let name = input[0];
    let episode = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = 0.125 * breakDuration;
    let breakTime = 0.25 * breakDuration;
    let leftTime = breakDuration - lunchTime - breakTime;

    if (leftTime >= episode) {
        let finalTime = Math.ceil(leftTime - episode);
    console.log(`You have enough time to watch ${name} and left with ${finalTime} minutes free time.`);
    } else {
        let timeNeeded = Math.ceil(episode - leftTime);
        console.log(`You don't have enough time to watch ${name}, you need ${timeNeeded} more minutes.`);
    }
}



lunchBreak(["Game of Thrones", "60", "96"])