function partyTime(input) {

    let guestList = [];
    let vipList = [];

    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'PARTY') {
        let guest = command;
        let firstChar = Number(guest[0]);

        if (firstChar.toString() === "NaN") {
            guestList.push(guest);
        } else {
            vipList.push(guest);
        }

        command = input[index];
        index++;
    }

    let joinedList = vipList.concat(guestList);

    for (let i = index; i < input.length; i++) {
        let guest = input[i];

        if (joinedList.includes(guest)) {
            joinedList.splice(joinedList.indexOf(guest), 1)
        }
    }

    console.log(joinedList.length);
    joinedList.forEach(el => {
        console.log(el);
    });
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);