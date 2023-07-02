function phoneBook(dataArr) {

    let phoneBookObj = {};

    for (const person of dataArr) {
        let [name, number] = person.split(' ');
        phoneBookObj[name] = number;
    }

    for (const key in phoneBookObj) {
        console.log(`${key} -> ${phoneBookObj[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);