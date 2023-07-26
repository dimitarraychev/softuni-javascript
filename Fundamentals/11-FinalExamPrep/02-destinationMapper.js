function destinationMapper(input) {

    const regex = /([=\/])(?<name>[A-Z][A-Za-z]{2,})\1/g;

    let output = [];
    let totalPoints = 0;
    let match = regex.exec(input);

    while (match) {
        let location = match.groups.name;
        output.push(location);

        let points = location.length;
        totalPoints += points;

        match = regex.exec(input);
    }

    console.log("Destinations: " + output.join(", "));
    console.log(`Travel Points: ${totalPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");