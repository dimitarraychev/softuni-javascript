function juiceFlavors(inputArr) {

    let flavorsMap = new Map();
    let juicesMap = new Map();

    for (const line of inputArr) {
        const [flavor, qty] = line.split(' => ');

        if (!flavorsMap.has(flavor)) {
            flavorsMap.set(flavor, 0);
        }

        flavorsMap.set(flavor, flavorsMap.get(flavor) + Number(qty));

        if (flavorsMap.get(flavor) >= 1000) {
            const bottles = Math.trunc(flavorsMap.get(flavor) / 1000);
            flavorsMap.set(flavor, flavorsMap.get(flavor) - bottles * 1000);

            if (!juicesMap.has(flavor)) {
                juicesMap.set(flavor, 0);
            }

            juicesMap.set(flavor, juicesMap.get(flavor) + bottles);
        }
    }

    for (let el of juicesMap) {
        console.log(`${el[0]} => ${el[1]}`);
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);