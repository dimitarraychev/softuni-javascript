function rotateArray(inputArr, rotations) {

    for (let i = 0; i < rotations; i++) {
        inputArr.unshift(inputArr.pop());
    }

    console.log(inputArr.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4'],
    2);