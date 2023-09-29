function arrayManipulations(data) {

    let arr = data.shift()
        .split(' ')
        .map(Number);

    let add = x => arr.push(x);
    function remove(x) {
        arr = arr.filter(a => a !== x);
    }
    let removeAt = i => arr.splice(i, 1);
    let insert = (x, i) => arr.splice(i, 0, x);

    for (let el of data) {
        let currEl = el.split(" ");
        let command = currEl[0];
        let num = Number(currEl[1]);

        switch (command) {
            case 'Add': add(num); break;
            case 'Remove': remove(num); break;
            case 'RemoveAt': removeAt(num); break;
            case 'Insert': insert(num, Number(currEl[2])); break;
        }
    }

    console.log(arr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);