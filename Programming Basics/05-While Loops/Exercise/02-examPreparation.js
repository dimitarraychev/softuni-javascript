function examPreparation(input) {

    let index = 0;
    let badGrades = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let badGradeCounter = 0;
    let gradeCounter = 0;
    let avgGrade = 0;
    let isNeedBreak = false;
    let taskName = "";

    while (command !== "Enough") {
        taskName = command;
        let taskGrade = Number(input[index]);
        index++;

        if (taskGrade <= 4) {
            badGradeCounter++;
            if (badGradeCounter === badGrades) {
                isNeedBreak = true;
                break;
            }
        }
        gradeCounter++;
        avgGrade += taskGrade;
        command = input[index];
        index++;
    }

    if (isNeedBreak) {
        console.log(`You need a break, ${badGradeCounter} poor grades.`);
    } else {
        console.log(`Average score: ${(avgGrade / gradeCounter).toFixed(2)}`);
        console.log(`Number of problems: ${gradeCounter}`);
        console.log(`Last problem: ${taskName}`);
    }
    
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);