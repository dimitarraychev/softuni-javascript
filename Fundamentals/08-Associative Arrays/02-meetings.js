function meetings(dataArr) {

    let scheduleObj = {};

    for (const meeting of dataArr) {
        let [day, name] = meeting.split(' ');

        if (scheduleObj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            scheduleObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in scheduleObj) {
        console.log(`${key} -> ${scheduleObj[key]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);