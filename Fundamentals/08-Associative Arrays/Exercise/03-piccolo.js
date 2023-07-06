function piccolo(platesArr) {

    let parkingLot = new Set();

    for (const car of platesArr) {
        let [command, plate] = car.split(', ');

        if (command === "IN") {
            parkingLot.add(plate);
        } else if (command === "OUT") {
            parkingLot.delete(plate);
        }
    }

    let sortedArr = Array.from(parkingLot.keys())
        .sort((a, b) => a.localeCompare(b));

    sortedArr.forEach(el => {
        console.log(el);
    });
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);