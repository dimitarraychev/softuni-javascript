function roadRadar(speed, area) {

    let limitsObj = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
        'calculate': (limit, speed) => {
            let status;

            if (speed <= limit) {
                return `Driving ${speed} km/h in a ${limit} zone`;
            } else {
                let difference = speed - limit;

                if (difference <= 20) status = 'speeding';
                else if (difference <= 40) status = 'excessive speeding';
                else status = 'reckless driving';
                
                return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;    
            }
        }
    }

    let result = limitsObj['calculate'](limitsObj[area], speed);
    console.log(result);
}

roadRadar(40, 'city');