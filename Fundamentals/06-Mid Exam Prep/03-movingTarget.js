function movingTarget(data) {

    let commandsArray = data.splice(0);
    let targets = commandsArray.shift();
    let targetsArray = targets.split(" ").map(Number);

    let index = 0;
    let command = commandsArray[index];
    index++;

    while (command !== "End") {

        let currCommand = command.split(" ");
        let action = currCommand[0];
        let targetIndex = Number(currCommand[1]);
        let num = Number(currCommand[2]);

        switch (action) {
            case "Shoot":

                if (targetIndex >= 0 && targetIndex < targetsArray.length) {
                    if (targetsArray[targetIndex] - num <= 0) {
                        targetsArray.splice(targetIndex, 1);
                    } else {
                        targetsArray[targetIndex] -= num;
                    }
                }
                break;

            case "Add":

                if (targetIndex >= 0 && targetIndex < targetsArray.length) {
                    targetsArray.splice(targetIndex, 0, num);
                } else {
                    console.log("Invalid placement!");
                }
                break;

            case "Strike":

                if (targetIndex - num >= 0 && targetIndex + num < targetsArray.length) {
                    targetsArray.splice(targetIndex - num, num * 2 + 1);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }

        command = commandsArray[index];
        index++;
    }

    console.log(targetsArray.join("|"));
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);