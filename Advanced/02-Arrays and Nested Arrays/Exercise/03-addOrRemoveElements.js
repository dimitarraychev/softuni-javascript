function addOrRemoveElements(inputArr) {

    let result = [];
    let buffer = 1;

    inputArr.forEach(element => {
        element === 'add' ? result.push(buffer) : result.pop();
        buffer++;
    });

    if (result.length !== 0) {
        result.forEach(x => console.log(x));
    } else {
        console.log('Empty');
    }
}

addOrRemoveElements(['add',
    'add',
    'add',
    'add']);