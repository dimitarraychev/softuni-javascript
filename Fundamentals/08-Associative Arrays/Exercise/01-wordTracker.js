function wordTracker(inputArr) {

    let map = new Map();

    let findWords = inputArr.shift().split(' ');

    findWords.forEach(element => {
        map.set(element, 0);
    });

    for (const line of findWords) {

        for (const word of inputArr) {

            if (line === word) {
                let currCount = Number(map.get(line));
                map.set(line, currCount + 1);
            }
        }
    }

    let sortedArr = Array.from(map.entries())
        .sort((a, b) => b[1] - a[1]);

    sortedArr.forEach(element => {
        console.log(element.join(' - '));
    });
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);