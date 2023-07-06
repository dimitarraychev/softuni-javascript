function oddOccurencies(input) {

    let wordsArr = input.split(' ')
        .map(e => e.toLowerCase());

    let wordsObj = {};

    for (const word of wordsArr) {
        if (wordsObj.hasOwnProperty(word)) {
            wordsObj[word]++;
        } else {
            wordsObj[word] = 1;
        }
    }

    let filteredArr = Array.from(Object.entries(wordsObj))
        .filter(e => e[1] % 2 !== 0)
        .sort((a, b) => b[1] - a[1]);

    let result = "";
    filteredArr.forEach(element => {
        result += `${element[0]} `;
    });

    console.log(result);
}

oddOccurencies('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');