function companyUsers(input) {

    let companiesObj = {};

    for (const line of input) {
        let [company, id] = line.split(' -> ');

        if (!companiesObj.hasOwnProperty(company)) {
            companiesObj[company] = id;
        } else {
            if (!companiesObj[company].includes(id)) {
                companiesObj[company] += `, ${id}`;
            }
        }
    }

    let sortedArr = Array.from(Object.keys(companiesObj))
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (const key of sortedArr) {
        console.log(key);

        for (const person of companiesObj[key].split(', ')) {
            console.log(`-- ${person}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);