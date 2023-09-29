function convertToJSON(name, lastName, hairColor) {

    let obj = {
        name,
        lastName,
        hairColor
    };

    let myJSON = JSON.stringify(obj);

    console.log(myJSON);
}

convertToJSON('George', 'Jones', 'Brown');