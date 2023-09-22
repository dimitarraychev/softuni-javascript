function townPopulation(inputArr) {

    let outputObj = {};

    for (const element of inputArr) {
        let [town, population] = element.split(' <-> ');

        if (!outputObj.hasOwnProperty(town)) {
            outputObj[town] = Number(population);
        } else {
            outputObj[town] += Number(population);
        }
    }

    for (const key of Object.keys(outputObj)) {
        console.log(`${key} : ${outputObj[key]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);