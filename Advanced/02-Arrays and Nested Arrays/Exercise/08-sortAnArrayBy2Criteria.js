function sortAnArrayBy2Criteria(inputArr) {

    let sortedArr = inputArr.sort((a, b) => a.length - b.length || a.localeCompare(b))
        .forEach(element => console.log(element));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);