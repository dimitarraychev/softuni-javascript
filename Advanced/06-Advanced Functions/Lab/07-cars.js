function cars(commandsArr) {

    let carsObj = {};

    const creatorObj = {
        create: function (name) {
            carsObj[name] = {};
        },
        inherit: function (name, parent) {
            carsObj[name] = Object.create(carsObj[parent]);
        },
        set: function (name, key, value) {
            carsObj[name][key] = value;
        },
        print: function (name) {
            let result = [];
            for (const key in carsObj[name]) {
                result.push(`${key}:${carsObj[name][key]}`);
            }
            console.log(result.join(','));
        }
    }

    for (const line of commandsArr) {
        if (!line.includes('inherit')) {
            let [command, name, key, value] = line.split(' ');
            creatorObj[command](name, key, value);
        } else {
            let [firstCommand, name, command, parent] = line.split(' ');
            creatorObj[command](name, parent);
        }
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);