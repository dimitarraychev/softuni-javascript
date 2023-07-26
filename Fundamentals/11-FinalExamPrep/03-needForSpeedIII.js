function needForSpeedIII(input) {

    let carsQty = input.shift();
    let carsObj = {};

    for (let i = 0; i < carsQty; i++) {
        let line = input.shift();
        let [car, mileage, fuel] = line.split('|');

        carsObj[car] = {
            mileage: +mileage,
            fuel: +fuel
        }
    }

    for (const line of input) {

        if (line === 'Stop') {
            break;
        }

        let tokens = line.split(' : ');
        let action = tokens[0];
        let car = tokens[1];
        let kilometers;
        let fuel;

        switch (action) {
            case 'Drive':
                kilometers = +tokens[2];
                fuel = +tokens[3];

                if (carsObj[car].fuel < fuel) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    carsObj[car].fuel -= fuel;
                    carsObj[car].mileage += kilometers;
                    console.log(`${car} driven for ${kilometers} kilometers. ${fuel} liters of fuel consumed.`);
                }

                if (carsObj[car].mileage >= 100000) {
                    delete carsObj[car];
                    console.log(`Time to sell the ${car}!`);
                }
                break;

            case 'Refuel':
                fuel = +tokens[2];
                let initialFuel = carsObj[car].fuel;
                carsObj[car].fuel += fuel;

                if (carsObj[car].fuel > 75) {
                    carsObj[car].fuel = 75;
                }

                let fuelChange = carsObj[car].fuel - initialFuel;
                console.log(`${car} refueled with ${fuelChange} liters`);
                break;

            case 'Revert':
                kilometers = +tokens[2];
                let initialMileage = carsObj[car].mileage;
                carsObj[car].mileage -= kilometers;
                let mileageChange = initialMileage - carsObj[car].mileage;

                if (carsObj[car].mileage < 10000) {
                    carsObj[car].mileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${mileageChange} kilometers`);
                }

                break;
        }
    }

    for (const key in carsObj) {
        console.log(`${key} -> Mileage: ${carsObj[key].mileage} kms, Fuel in the tank: ${carsObj[key].fuel} lt.`);
    }
}

needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);