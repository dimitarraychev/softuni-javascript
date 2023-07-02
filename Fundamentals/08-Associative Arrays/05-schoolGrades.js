function schoolGrades(dataArr) {

    let studentsObj = {};

    for (let studentData of dataArr) {
        let gradeArr = studentData.split(' ');
        let name = gradeArr.shift();
        let grades = gradeArr.join(' ');

        if (studentsObj.hasOwnProperty(name)) {
            studentsObj[name] += ` ${grades}`;
        } else {
            studentsObj[name] = grades;
        }
    }

    for (const [name, grades] of Object.entries(studentsObj)) {
        let gradesArr = grades.split(' ');
        let avgGrade = 0;
        gradesArr.forEach(element => {
            avgGrade += Number(element);
        });
        avgGrade /= gradesArr.length;
        studentsObj[name] = avgGrade;
    }

    let sortedArr = Object.entries(studentsObj)
        .sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

    sortedArr.forEach(element => {
        console.log(`${element[0]}: ${element[1].toFixed(2)}`);
    });
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);