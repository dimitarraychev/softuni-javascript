function onTimeForTheExam(input) {

    let examH = Number(input[0]);
    let examM = Number(input[1]);
    let timeH = Number(input[2]);
    let timeM = Number(input[3]);

    let exam = examH * 60 + examM;
    let time = timeH * 60 + timeM;
    let diffEarly = exam - time;
    let diffLate = time - exam;

    if (examH === timeH && examM === timeM) {
        console.log("On time");
    } else if (diffEarly <= 30 && diffEarly > 0) {
        console.log("On time");
        console.log(`${diffEarly} minutes before the start`);
    } else if (diffEarly > 30 && diffEarly <= 59) {
        console.log("Early");
        console.log(`${diffEarly} minutes before the start`);
    } else if (diffEarly > 59) {
        let hBefore = Math.floor(diffEarly / 60);
        let mBefore = diffEarly % 60;
        console.log("Early");
        if (mBefore < 10) {
            console.log(`${hBefore}:0${mBefore} hours before the start`);
        } else {
            console.log(`${hBefore}:${mBefore} hours before the start`);
        }
    } else if (diffLate <= 59 && diffLate > 0) {
        console.log("Late");
        console.log(`${diffLate} minutes after the start`);
    } else if (diffLate > 59) {
        let hLate = Math.floor(diffLate / 60);
        let mLate = diffLate % 60;
        console.log("Late");
        if (mLate < 10) {
            console.log(`${hLate}:0${mLate} hours after the start`);
        } else {
            console.log(`${hLate}:${mLate} hours after the start`);
        }
    }

}

onTimeForTheExam(["11", "30", "10", "55"]);