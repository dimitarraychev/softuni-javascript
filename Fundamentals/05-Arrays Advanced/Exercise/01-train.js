function train(data) {

    let commands = data.slice(0);
    let arr = commands.shift().split(' ').map(Number);
    let capacity = commands.shift();

    for (let element of commands) {
        let splitEl = element.split(' ');

        if (splitEl[0] === 'Add') {
            arr.push(splitEl[1]);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let passengers = Number(splitEl[0]);

                if (arr[i] + passengers <= capacity) {
                    arr[i] += passengers;
                    break;
                }
            }
        }
    }

    console.log(arr.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);