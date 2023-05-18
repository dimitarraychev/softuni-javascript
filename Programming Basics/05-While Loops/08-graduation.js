function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let klas = 1;
    let avgGrade = 0;
    let badGrades = 0;
    let excluded = false;

    while (klas <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            badGrades++;

            if (badGrades > 1) {
                excluded = true;
                break;
            }
            continue;
        }
        avgGrade += grade;
        klas++;
    }

    if (!excluded) {
    console.log(`${name} graduated. Average grade: ${(avgGrade / 12).toFixed(2)}`);
    } else {
    console.log(`${name} has been excluded at ${klas} grade`);
    }
}

graduation(["Gosho",
"5",
"5.5",
"6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);