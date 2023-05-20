function trainTheTrainers(input) {

    let index = 0;
    let juryCount = input[index];
    index++;
    let command = input[index];
    index++;
    let avGrade = 0;
    let finished = 0;

    while (command !== "Finish") {
        let task = command;
        let grades = 1;
        let gradeSum = 0;

        while (grades <= juryCount) {
            let grade = Number(input[index]);
            index++;
            gradeSum += grade;
            grades++;
        }

        console.log(`${task} - ${(gradeSum / juryCount).toFixed(2)}.`);
        avGrade += gradeSum / juryCount;

        finished++;
        command = input[index];
        index++;
    }

    console.log(`Student's final assessment is ${(avGrade / finished).toFixed(2)}.`);

}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);