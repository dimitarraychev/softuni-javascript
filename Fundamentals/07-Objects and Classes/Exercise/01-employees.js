function employees(nameArr) {

    let employeesObj = {};

    for (const name of nameArr) {
        employeesObj[name] = name.length;
    }

    for (const key in employeesObj) {
        console.log(`Name: ${key} -- Personal Number: ${employeesObj[key]}`);
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);