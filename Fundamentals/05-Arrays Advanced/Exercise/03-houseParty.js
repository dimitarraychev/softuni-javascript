function houseParty(commands) {

    let guestList = [];

    for (const command of commands) {
        let splitComm = command.split(' ');
        let name = splitComm[0];

        if (splitComm.includes('not')) {

            if (guestList.includes(name)) {
                let nameIndex = guestList.indexOf(name);
                guestList.splice(nameIndex, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {

            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        }
    }

    console.log(guestList.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);