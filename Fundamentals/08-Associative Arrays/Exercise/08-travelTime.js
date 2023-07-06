function travelTime(input) {

    let destinationsObj = {};

    for (const line of input) {
        let [country, town, price] = line.split(' > ');

        if (!destinationsObj.hasOwnProperty(country)) {
            destinationsObj[country] = {};
            destinationsObj[country][town] = price;
        } else {
            destinationsObj[country][town] = price;
        }
    }

    let alphabeticalArray = Array.from(Object.keys(destinationsObj))
        .sort((a, b) => a.localeCompare(b));

    for (const country of alphabeticalArray) {
        let result = '';

        let sortedArr = Array.from(Object.entries(destinationsObj[country]))
            .sort((a, b) => a[1] - b[1]);

        for (const key in destinationsObj[country]) {

            let townArr = sortedArr[0];

            if (!result.includes(country)) {
                result += `${country} -> ${townArr[0]} -> ${townArr[1]}`
            } else {
                for (element of sortedArr) {
                    let name = element[0];
                    let price = element[1];

                    if (!result.includes(name)) {
                        result += ` ${name} -> ${price}`
                    }
                }
            }
        }

        console.log(result);
    }
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10']);