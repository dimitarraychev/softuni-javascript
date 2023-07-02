function addressBook(dataArr) {

    let addressObj = {};

    for (const person of dataArr) {
        let [name, address] = person.split(':');
        addressObj[name] = address;
    }

    let sortedArr = Object.keys(addressObj);
    sortedArr.sort((a, b) => a.localeCompare(b));

    for (const name of sortedArr) {
        console.log(`${name} -> ${addressObj[name]}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);