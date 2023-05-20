function moving(input) {

    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    let freeSpace = w * l * h;
    let command = input[index];
    index++;

    while (command !== "Done") {
        let boxes = Number(command);

        if (freeSpace - boxes > 0) {
            freeSpace -= boxes;
        } else {
            let spaceNeeded = boxes - freeSpace;
            console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Done") {
        console.log(`${freeSpace} Cubic meters left.`);
    }

}

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]);