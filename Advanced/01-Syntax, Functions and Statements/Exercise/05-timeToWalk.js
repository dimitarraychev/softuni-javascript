function timeToWalk(steps, length, kmPerHour) {

    let meters = steps * length;
    let mPerSec = kmPerHour / 3.6;
    let timeInSec = meters / mPerSec;
    let breaktimeInSec = Math.floor(meters / 500) * 60;
    timeInSec += breaktimeInSec;

    let hours = (Math.floor(timeInSec / 3600)).toString();
    let minutes = (Math.floor(timeInSec / 60)).toString();
    let seconds = (Math.round(timeInSec % 60)).toString();

    console.log(`${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);