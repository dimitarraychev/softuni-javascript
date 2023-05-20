function walking(input) {

    let index = 0;
    let command = input[index];
    index++;
    let totalSteps = 0;

    while (command !== "Going home") {
        let steps = Number(command);
        totalSteps += steps;

        if (totalSteps >= 10000) {
            let moreSteps = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${moreSteps} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;

    }

    if (command === "Going home") {
        let steps = Number(input[index]);
        totalSteps += steps;
        if (totalSteps >= 10000) {
            let moreSteps = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${moreSteps} steps over the goal!`);
        } else {
            let lessSteps = 10000 - totalSteps;
            console.log(`${lessSteps} more steps to reach goal.`);
        }
    }

}

walking(["1000",
    "1500",
    "2000",
    "6500"]);