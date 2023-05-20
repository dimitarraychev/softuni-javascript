function minNumber(input) {

    let index = 0;
    let command = input[index];
    index++;
    let minNum = Number(input[0]);

    while (command !== "Stop") {
        let currNum = Number(command);
        if (currNum < minNum) {
            minNum = currNum;
        }

        command = input[index];
        index++;
    }

    console.log(minNum);

}

minNumber(["999", "Stop"]);