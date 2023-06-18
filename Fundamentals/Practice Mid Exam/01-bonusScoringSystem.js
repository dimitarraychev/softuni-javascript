function bonusScoringSystem(data) {

    let studentsCount = Number(data.shift());
    let totalLectures = Number(data.shift());
    let bonus = Number(data.shift());
    let maxAttendance = 0;
    let maxBonus = 0;

    for (let i = 0; i < studentsCount; i++) {
        let studentAttendance = Number(data[i]);
        let currBonus = studentAttendance / totalLectures * (5 + bonus);

        if (currBonus >= maxBonus) {
            maxAttendance = studentAttendance;
            maxBonus = currBonus;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}

bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);