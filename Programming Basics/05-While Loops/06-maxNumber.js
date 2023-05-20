function maxNumber(input) {
    
    let index = 0;
    let command = input[index];
    index++;
    let maxNum = Number(input[0]);

    while (command !== "Stop") {
        let currNum = Number(command);

        if (currNum > maxNum) {
            maxNum = currNum;
        }

        command = input[index];
        index++;
    }

    console.log(maxNum);

}
maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);