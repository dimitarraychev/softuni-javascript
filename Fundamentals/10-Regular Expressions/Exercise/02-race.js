function race(arr) {

    const nameRegex = /[A-Za-z]+/g;
    const distanceRegex = /\d/g

    let racersObj = {};
    let racers = arr.shift().split(', ');
    racers.forEach(el => { racersObj[el] = 0; });

    let i = 0;
    let currLine = arr[i];

    while (currLine !== 'end of race') {

        let name = currLine.match(nameRegex)
            .join('');
        let totalDistance = 0;
        let distance = currLine.match(distanceRegex);
        distance.forEach(el => totalDistance += Number(el));

        if (racersObj.hasOwnProperty(name)) {
            racersObj[name] += totalDistance;
        }

        i++;
        currLine = arr[i];
    }

    let sortedArr = Array.from(Object.entries(racersObj))
        .sort((a, b) => b[1] - a[1]);

    console.log('1st place: ' + sortedArr[0][0]);
    console.log('2nd place: ' + sortedArr[1][0]);
    console.log('3rd place: ' + sortedArr[2][0]);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);