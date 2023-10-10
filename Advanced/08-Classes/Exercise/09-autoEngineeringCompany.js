function autoEngineeringCompany(inputArr) {

    let carBrands = new Map();

    for (const line of inputArr) {
        const [brand, model, qty] = line.split(' | ');

        if (carBrands.has(brand)) {

            let brandMap = carBrands.get(brand);

            if (brandMap.has(model)) {
                brandMap.set(model, brandMap.get(model) + Number(qty));
            } else {
                brandMap.set(model, Number(qty));
            }

        } else {
            carBrands.set(brand, new Map());
            carBrands.get(brand).set(model, Number(qty));
        }
    }

    for (const brand of carBrands) {
        console.log(brand[0]);

        for (const model of brand[1]) {
            console.log(`###${model[0]} -> ${model[1]}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);