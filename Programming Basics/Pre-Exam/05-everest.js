function everest(input) {

    let index = 0;
    let command = input[index];
    index++;
    let days = 1;
    let totalMeters = 5364;

    while (command !== "END") {
        let sleep = command;
        if (sleep === "Yes") {
            days++;
        }
        if (days > 5) {
            console.log("Failed!")
            console.log(`${totalMeters}`);
            break;
        }

        let meters = Number(input[index]);
        index++;
        totalMeters += meters;
        if (totalMeters >= 8848) {
            console.log(`Goal reached for ${days} days!`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "END") {
        console.log("Failed!")
        console.log(`${totalMeters}`);
    }
    
}

everest(["Yes",
    "700",
    "END"]);