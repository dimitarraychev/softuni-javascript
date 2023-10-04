function argumentInfo(...arguments) {

    let typesCounter = {};

    for (const arg of arguments) {
        let currType = typeof (arg);
        typesCounter.hasOwnProperty(currType) ? typesCounter[currType] += 1 : typesCounter[currType] = 1;
        console.log(`${currType}: ${arg}`);
    }

    sortedArr = Object.entries(typesCounter).sort((a, b) => b[1] - a[1]);

    for (const [type, value] of sortedArr) {
        console.log(`${type} = ${value}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });