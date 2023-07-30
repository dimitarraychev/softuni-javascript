function easterEggs(input) {

    const regex = /[@#]+(?<color>[a-z]{3,})[@#]+[^A-Za-z\d]*\/+(?<qty>\d+)\/+/g;

    let text = input.shift();
    let match = regex.exec(text);

    while (match) {

        let color = match.groups.color;
        let qty = match.groups.qty;

        console.log(`You found ${qty} ${color} eggs!`);

        match = regex.exec(text);
    }
}

easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);