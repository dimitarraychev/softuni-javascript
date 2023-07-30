function worldTour(input) {

    let stops = input.shift();

    let parserObject = {
        'Add Stop': (stops, index, string) => {

            if (stops[index]) {
                let firstHalf = stops.substring(0, +index);
                let secondHalf = stops.substring(+index);
                return firstHalf + string + secondHalf;
            }

            return stops;
        },
        'Remove Stop': (stops, start, end) => {

            if ((stops[+start]) && (stops[+end])) {
                let firstHalf = stops.substring(0, start);
                let secondHalf = stops.substring(+end + 1);
                return firstHalf + secondHalf;
            }

            return stops;
        },
        'Switch': (stops, oldStr, newStr) => {

            if (stops.includes(oldStr)) {
                return stops.replace(new RegExp(oldStr, 'g'), newStr);
            }

            return stops;
        }
    }

    for (const line of input) {

        if (line !== 'Travel') {
            let [action, ...tokens] = line.split(':');
            stops = parserObject[action](stops, ...tokens);
            console.log(stops);
        }

    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);